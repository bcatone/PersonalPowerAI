class CreateCategoryTypeConnections < ActiveRecord::Migration[7.0]
  def change
    create_table :category_type_connections do |t|
      t.belongs_to :category_type, null: false, foreign_key: true
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
