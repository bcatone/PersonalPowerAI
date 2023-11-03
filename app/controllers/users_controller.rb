class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def index
        render json: User.all, status: :ok
    end

    def show
        render json: User.find(params[:id]), status: :ok
    end

    # This is the login route using traditional password registration
    # Passage registration and PostgreSQL entity creations are currently handled by application#current_user
    # Will improve dual registration handling in a future version
    def create
        render json: User.create!(user_params), status: :created
    end

    def update
        render json: User.update!(user_params), status: :accepted
    end

    def destroy
        user = User.find_by(id: params[:id])
        if user&.authenticate(params[:password])
            user.destroy
            head :no_content
        else 
            render json:{ errors: "Invalid password"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email, :phone_number, :first_name, :middle_name, :last_name, :suffix, :date_of_birth, :city, :state, :country, :zip_code, :timezone)
    end

    
end
