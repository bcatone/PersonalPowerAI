class UserInterestsController < ApplicationController

    def index
        @user = User.find(params[:id])

        render json: UserInterest.where!(user: @user), status: :ok
    end
end
