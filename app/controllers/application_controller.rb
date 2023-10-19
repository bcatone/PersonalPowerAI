

class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::ConnectionNotEstablished, with: :render_connection_not_established_response
    include ActionController::Cookies

    before_action :authorized_user

    Passage = Passage::Client.new(
      app_id: Rails.application.config.passage_app_id
      api_key: Rails.application.config.passage_api_key
    )

    def current_user
      user = User.find_by(id: session[:user_id])

      if !user && session[:psg_user_id]
        passage_user = PassageClient.user.get(user_id: @user_id)
        @email = passage_user[:email]
        user = User.find_by(email: @email)

        User.create!(email: @email) unless user
        user
      end

      user
    end

    def authorized_user
      render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
    end

    def authorize!
      begin
        request.to_hash()
        @user_id = Passage.auth.authenticate_request(request)
        session[:psg_user_id] = @user_id

        render json: current_user, status: :ok
      rescue Exception => e
        # unauthorized
        redirect_to "/unauthorized"
      end
    end

    
    private
    
    def render_not_found_response(error)
        render json: { error: "#{error.model} not found."}, status: :not_found
    end

    def render_unprocessable_entity_response(error)
        render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end



    def render_connection_not_established_response(error)
        render json: { error: error}, status: :service_unavailable
    end
end
