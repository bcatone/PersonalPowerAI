class UserGender < ApplicationRecord
  belongs_to :user
  belongs_to :gender
end
