class SimilarCategoryLinksController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: SimilarCategoryLink.all, status: :ok
    end

    def similar_categories
        categories = Category.all
        category_json = {}
        
        categories.each do |category|
            category_json[category.name] = category.similar_categories
        end

        render json: category_json, status: :ok
    end

end
