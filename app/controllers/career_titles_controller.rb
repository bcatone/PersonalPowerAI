class CareerTitlesController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: CareerTitle.all, status: :ok
    end
    
end
