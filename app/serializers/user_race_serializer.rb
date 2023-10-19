class UserRaceSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :race
end
