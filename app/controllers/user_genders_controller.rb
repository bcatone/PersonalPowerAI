class UserGendersController < ApplicationController
    
    def index
        @user = User.find(params[:id])

        render json: UserGender.where!(user: @user), status: :ok
    end
end
