class CategoryInterestSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :category
  has_one :interest
end
