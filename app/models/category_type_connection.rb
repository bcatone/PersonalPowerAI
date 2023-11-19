class CategoryTypeConnection < ApplicationRecord
  belongs_to :category_type
  belongs_to :category
end
