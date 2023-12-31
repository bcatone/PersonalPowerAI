class Skill < ApplicationRecord
    has_many :category_skills, dependent: :destroy
    has_many :categories, through: :category_skills

    has_many :user_skills, dependent: :destroy
    has_many :users, through: :user_skills

    validates :name, presence: :true
end
