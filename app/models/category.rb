class Category < ApplicationRecord
    has_many :category_interests, dependent: :destroy
    has_many :interests, through: :category_interests

    has_many :category_skills, dependent: :destroy
    has_many :skills, through: :category_skills

    validates :name, presence: :true, uniqueness: true
end
