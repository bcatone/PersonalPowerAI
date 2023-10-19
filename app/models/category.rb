class Category < ApplicationRecord

    has_many :category_interests
    has_many :interests, through: :category_interests

    has_many :category_skills
    has_many :skills, through: :category_skills

    validates :name, presence: :true, uniqueness: true

    
end
