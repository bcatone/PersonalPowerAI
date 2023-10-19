class SessionsController < ApplicationController

    skip_before_action :authorized_user, only: [:create]

    def show
        render json: current_user, status: :ok
    end
    
    # This is the standard password login without Passage
    def create
        user = User.find_by(username: params[:username])

        # Handle successful login with the password
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created

        # Handle incorrect username or password
        elsif user.password
            render json:{ error: "Invalid username or password"}, status: :unauthorized

        # Handle no password set due to user originally registering with Passage
        else
            render json: { error: "No password was set for this account"}, status: :unprocessable_entity
        end
    end
    
    # This is the logout regardless of the auth method
    def destroy
        session.delete :user_id
        session.delete :psg_user_id
        head :no_content 
    end
end
