class CareerFieldsController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: CareerField.all, status: :ok
    end
end
