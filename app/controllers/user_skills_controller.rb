class UserSkillsController < ApplicationController

    def index
        @user = User.find(params[:id])

        render json: UserSkill.where!(user: @user), status: :ok
    end
end
