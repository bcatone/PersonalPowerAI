class SkillsController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: Skill.all, status: :ok
    end

    def create
        @category = params[:name]
        
        render json: Category.create!(name: @category), status: :created
    end
end
