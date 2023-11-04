class UserEthnicity < ApplicationRecord
  belongs_to :user
  belongs_to :ethnicity
end
