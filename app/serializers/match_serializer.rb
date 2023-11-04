class MatchSerializer < ActiveModel::Serializer
  attributes :id
  has_one :mentor, serializer: UserSerializer
  has_one :mentee, serializer: UserSerializer
end