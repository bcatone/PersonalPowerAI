class CategoriesController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: Category.all, status: :ok
    end
end
