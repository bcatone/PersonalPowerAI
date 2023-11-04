class Gender < ApplicationRecord
    has_many :user_genders, dependent: :destroy
    has_many :users, through: :user_genders
end
