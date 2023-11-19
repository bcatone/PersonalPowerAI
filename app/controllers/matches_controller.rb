class MatchesController < ApplicationController

    def index
        matches = Match.includes(:mentor, :mentee)
        render json: matches, status: :ok
    end
end
