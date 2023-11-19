class GendersController < ApplicationController
    skip_before_action :authorized_user

    # Returns all gender options
    def index
        render json: Gender.all, status: :ok
    end

    # In case user selects "other" and specifies a gender
    def create
        @gender = params[:gender]
        
        render json: Gender.create!(name: @gender), status: :created
    end
end
