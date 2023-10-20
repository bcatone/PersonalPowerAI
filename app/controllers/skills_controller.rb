class SkillsController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: Skill.all, status: :ok
    end
end
