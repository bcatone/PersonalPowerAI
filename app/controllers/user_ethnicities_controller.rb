class UserEthnicitiesController < ApplicationController
    
    def index
        @user = User.find(params[:id])

        render json: UserEthnicity.where!(user: @user), status: :ok
    end
end
