class CategoryType < ApplicationRecord
    has_many :category_type_connections
    has_many :categories, through: :category_type_connections
end
