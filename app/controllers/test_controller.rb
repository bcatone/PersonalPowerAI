class TestController < ApplicationController
    skip_before_action :authorized_user
    def test
        render json: {message: "Hello from Rails! :)"}, status: :ok
    end
end
