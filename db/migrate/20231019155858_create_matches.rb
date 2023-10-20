class CreateMatches < ActiveRecord::Migration[7.0]
  def change
    create_table :matches do |t|
      t.belongs_to :mentor, null: false, foreign_key: true
      t.belongs_to :mentee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
