class MatchSerializer < ActiveModel::Serializer
  attributes :id
  has_one :mentor
  has_one :mentee
end
