class MentorsController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :add_mentor_status_to_user]

    def index
        render json: Mentor.all, status: :ok
    end

    def show
        render json: Mentor.find(params[:id]), status: :ok
    end

    def add_mentor_status_to_user
        user = user.find(params[:user_id])
        
        render json: Mentor.create!(user: user), status: :created
    end

    def remove_mentor_status_from_user
        mentor = Mentor.find_by(user_id: params[:user_id])
        if mentor&.authenticate(params[:password])
            mentor.destroy
            head :no_content
        else 
            render json:{ errors: "Invalid password"}, status: :unauthorized
        end
    end
end
