class MentorsController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: Mentor.all, status: :ok
    end

end
