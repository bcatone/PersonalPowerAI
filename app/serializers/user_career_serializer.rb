class UserCareerSerializer < ActiveModel::Serializer
  attributes :id, :company, :start_date, :end_date, :is_current, :description
  has_one :user
  has_one :career_title
end
