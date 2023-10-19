class CreateCategoryInterests < ActiveRecord::Migration[7.0]
  def change
    create_table :category_interests do |t|
      t.string :name
      t.belongs_to :category, null: false, foreign_key: true
      t.belongs_to :interest, null: false, foreign_key: true

      t.timestamps
    end
  end
end
