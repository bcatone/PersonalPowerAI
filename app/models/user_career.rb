class UserCareer < ApplicationRecord
  belongs_to :user
  belongs_to :career_title
end
