class CreateSimilarCategoryLinks < ActiveRecord::Migration[7.0]
  def change
    create_table :similar_category_links do |t|
      t.references :category_1, null: false, foreign_key: { to_table: :categories }
      t.references :category_2, null: false, foreign_key: { to_table: :categories }

      t.timestamps
    end
  end
end
