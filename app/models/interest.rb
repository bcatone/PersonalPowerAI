class Interest < ApplicationRecord
    has_many :category_interests, dependent: :destroy
    has_many :categories, through: :category_interests

    has_many :user_interests, dependent: :destroy
    has_many :users, through: :user_categories

    validates :name, presence: :true
    
end
