class Skill < ApplicationRecord

    has_many :category_skills
    has_many :categories, through: :categories

    validates :name, presence: :true
end
