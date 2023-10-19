class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :middle_name, :last_name, :suffix, :date_of_birth, :city, :state, :country, :zip_code, :timezone
  has_one :gender
  has_one :race
end
