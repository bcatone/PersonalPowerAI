class UserRacesController < ApplicationController
    skip_before_action :authorized_user

    def index
        @user = User.find(params[:id])

        render json: UserRace.where!(user: @user), status: :ok
    end
end
