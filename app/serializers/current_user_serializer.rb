class CurrentUserSerializer < ActiveModel::Serializer
  attributes :username, :first_name, :middle_name, :last_name, :suffix, :date_of_birth, :city, :state, :country, :zip_code, :timezone, :age, :is_adult

  has_many :genders
  has_many :races
  has_many :user_careers
  has_many :user_skills
  has_many :user_interests
end
