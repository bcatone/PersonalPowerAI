class CategorySkillSerializer < ActiveModel::Serializer
  attributes :id
  has_one :category
  has_one :skill
end
