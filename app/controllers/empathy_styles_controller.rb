class EmpathyStylesController < ApplicationController
    skip_before_action :authorized_user
end
