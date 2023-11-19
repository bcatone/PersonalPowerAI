class MenteesController < ApplicationController
    skip_before_action :authorized_user, only: [:add_mentee_status_to_user]

    def index
        render json: Mentee.all, status: :ok
    end

    def show
        render json: Mentee.find(params[:id]), status: :ok
    end

    def add_mentor_status_to_user
        user = user.find(params[:user_id])
        
        render json: Mentee.create!(user: user), status: :created
    end

    def remove_mentor_status_from_user
        mentee = Mentee.find_by(user_id: params[:user_id])
        if mentee&.authenticate(params[:password])
            mentee.destroy
            head :no_content
        else 
            render json:{ errors: "Invalid password"}, status: :unauthorized
        end
    end
end
