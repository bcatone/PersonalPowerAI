class InterestsController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: Interest.all, status: :ok
    end

end
