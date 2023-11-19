class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :skills
  has_many :interests
end
