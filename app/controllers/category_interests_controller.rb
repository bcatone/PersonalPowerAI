class CategoryInterestsController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: CategoryInterest.all, status: :ok
    end
end
