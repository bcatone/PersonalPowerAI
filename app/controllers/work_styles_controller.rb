class WorkStylesController < ApplicationController
    skip_before_action :authorized_user
end
