class MentorSerializer < ActiveModel::Serializer
  attributes :id, :user
  has_one :user

  def user
    self.object.user
  end
end
