class InterestsController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: Interest.all, status: :ok
    end

    def create
        @interest = params[:name]
        
        render json: Category.create!(name: @interest), status: :created
    end

end
