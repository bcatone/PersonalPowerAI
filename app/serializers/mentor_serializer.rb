class MentorSerializer < ActiveModel::Serializer
  attributes :id, :user
  has_one :user

end
