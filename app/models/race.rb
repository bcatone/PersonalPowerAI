class Race < ApplicationRecord

    has_many :user_races
    has_many :users, through: :user_races
end
