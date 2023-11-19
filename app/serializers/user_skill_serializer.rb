class UserSkillSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :skill
end
