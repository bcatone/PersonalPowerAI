class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:create, :destroy]

    # Return the user that is currently logged in
    def show
        render json: current_user, status: :ok
    end
    
    # Logs in the user
    # This will be refactored to account for jwt token
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            # session[:user_id] = user.id
            token = JsonWebTokenService.encode(user_id: user.id)
            render json: { user: user, token: token }, status: :created
        else 
            render json:{ error: "Invalid username or password"}, status: :unauthorized
        end
    end
    
    # Logs the user out
    def destroy
        # session.delete :user_id
        head :no_content 
    end
end
