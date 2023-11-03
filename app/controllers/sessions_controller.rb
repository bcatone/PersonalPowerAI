class SessionsController < ApplicationController

    skip_before_action :authorized_user, only: [:create, :destroy]

    def show
        render json: current_user, status: :ok
    end
    
    # This is the standard password login without Passage
    def create

        puts "Requested email: "
        user = User.find_by(email: params[:email])

        # Handle successful login with the password
        # if user&.authenticate(params[:password])
        if user
            puts "Actually logging in the user"
            session[:user_id] = user.id
            render json: user, status: :created

        # # Handle no password set due to user originally registering with Passage
        # elsif !user.password
            # render json: { error: "No password was set for this account", email: params[:email]}, status: :unprocessable_entity

        # Handle incorrect username or password
        else

            # Temporary code while the auth issue is being fixed
            mock_user = User.first

            if mock_user
                puts "Pretending to log in the user"
                session[:user_id] = mock_user.id
                render json: mock_user, status: :ok
            else
                render json:{ error: "Invalid username or password", }, status: :unauthorized
            end
            # End temporary code
        end
    end
    
    # This is the logout regardless of the auth method
    def destroy
        session.delete :user_id
        session.delete :psg_user_id
        head :no_content 
    end
end
