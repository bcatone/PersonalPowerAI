class MatchesController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: Match.all, status: :ok
    end
end
