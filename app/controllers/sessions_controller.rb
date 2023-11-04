class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    # Return the user that is currently logged in
    def show
        render json: current_user, status: :ok
    end
    
    # Logs in the user
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json:{ error: "Invalid username or password"}, status: :unauthorized
        end
    end
    
    # Logs the user out
    def destroy
        session.delete :user_id
        head :no_content 
    end
end
