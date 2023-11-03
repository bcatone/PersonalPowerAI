class RacesController < ApplicationController
    skip_before_action :authorized_user
    
    def index
        render json: Race.all, status: :ok
    end
end
