class GendersController < ApplicationController
    skip_before_action :authorized_user
    
    def index
        render json: Gender.all, status: :ok
    end
end
