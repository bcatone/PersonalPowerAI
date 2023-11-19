class CategoryTypeConnectionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :category_type
  has_one :category
end
