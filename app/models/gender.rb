class Gender < ApplicationRecord
    
    has_many :user_genders
    has_many :users, through: :user_genders

    
end
