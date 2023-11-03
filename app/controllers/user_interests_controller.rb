class UserInterestsController < ApplicationController
    skip_before_action :authorized_user

    def index
        @user = User.find(params[:id])

        render json: UserInterest.where!(user: @user), status: :ok
    end
end
