class EthnicitiesController < ApplicationController
    skip_before_action :authorized_user

        # Returns all race options
        def index
            render json: Ethnicity.all, status: :ok
        end
    
        # In case user selects "other" and specifies a race
        def create
            @ethnicity = params[:name]
            
            render json: Ethnicity.create!(name: @ethnicity), status: :created
        end
end
