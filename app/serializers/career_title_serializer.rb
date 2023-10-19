class CareerTitleSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :career_field
end
