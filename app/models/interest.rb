class Interest < ApplicationRecord

    has_many :category_interests
    has_many :categories, through: :categories

    validates :name, presence: :true
    
end
