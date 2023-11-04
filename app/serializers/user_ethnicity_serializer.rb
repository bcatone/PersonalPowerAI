class UserEthnicitySerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :ethnicity
end
