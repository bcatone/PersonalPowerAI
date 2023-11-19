class Match < ApplicationRecord
  belongs_to :mentor
  belongs_to :mentee

  has_many :messages
end
