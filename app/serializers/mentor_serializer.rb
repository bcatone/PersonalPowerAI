class MentorSerializer < ActiveModel::Serializer
  attributes :id, :user
  has_one :user

  def user
    User.find(self.id)
  end
end
