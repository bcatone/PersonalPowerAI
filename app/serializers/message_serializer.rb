class MessageSerializer < ActiveModel::Serializer
  attributes :id, :sender, :receiver, :content, :is_read
  has_one :match
end
