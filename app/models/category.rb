class Category < ApplicationRecord

    has_many :category_type_connections, dependent: :destroy
    has_many :category_types, through: :category_type_connections

    has_many :similar_category_links_1, class_name: 'SimilarCategoryLink', foreign_key: 'category_1_id'
    has_many :similar_category_links_2, class_name: 'SimilarCategoryLink', foreign_key: 'category_2_id'

    has_many :category_interests, dependent: :destroy
    has_many :interests, through: :category_interests

    has_many :category_skills, dependent: :destroy
    has_many :skills, through: :category_skills

    validates :name, presence: :true, uniqueness: true

    def similar_categories
        similar_category_links_1.map(&:category_2).uniq.map(&:name)
    end

    def similar_categories_bidirectional
        (similar_category_links_1.map(&:category_2) + similar_category_links_2.map(&:category_1)).uniq.map(&:name)
    end
    
end
