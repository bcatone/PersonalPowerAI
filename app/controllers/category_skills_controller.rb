class CategorySkillsController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: CategorySkill.all, status: :ok
    end

end
