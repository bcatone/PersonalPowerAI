class UserCareersController < ApplicationController

    def index
        @user = User.find(params[:id])

        render json: UserCareer.where!(user: @user), status: :ok
    end
end
