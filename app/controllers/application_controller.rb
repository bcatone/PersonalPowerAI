class ApplicationController < ActionController::API
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # rescue_from ActiveRecord::ConnectionNotEstablished, with: :render_connection_not_established_response
    # include ActionController::Cookies

    # before_action :authorized_user

    # def current_user
    #   user = User.find_by(id: session[:user_id])
    #   user
    # end

    # def authorized_user
    #   render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
    # end
    
    # private
    
    # def render_not_found_response(error)
    #     render json: { error: "#{error.model} not found."}, status: :not_found
    # end

    # def render_unprocessable_entity_response(error)
    #     render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    # end



    # def render_connection_not_established_response(error)
    #     render json: { error: error}, status: :service_unavailable
    # end
end
