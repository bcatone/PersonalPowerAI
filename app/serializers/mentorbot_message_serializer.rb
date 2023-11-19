class MentorBotMessageSerializer < ActiveModel::Serializer
    attributes :id, :role, :content, :created_at
    has_one :user
end