class SimilarCategoryLink < ApplicationRecord
  belongs_to :category_1, class_name: 'Category', foreign_key: 'category_1_id'
  belongs_to :category_2, class_name: 'Category', foreign_key: 'category_2_id'
end
