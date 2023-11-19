class Ethnicity < ApplicationRecord
    has_many :user_ethnicities, dependent: :destroy
    has_many :users, through: :user_ethnicities
end
