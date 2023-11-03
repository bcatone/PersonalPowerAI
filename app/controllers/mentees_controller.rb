class MenteesController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: Mentee.all, status: :ok
    end
end
