class SimilarCategoryLinkSerializer < ActiveModel::Serializer
  attributes :id
  has_one :category_1
  has_one :category_2
end
