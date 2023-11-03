class CreateCareerTitles < ActiveRecord::Migration[7.0]
  def change
    create_table :career_titles do |t|
      t.string :name
      t.belongs_to :career_field, null: false, foreign_key: true

      t.timestamps
    end
  end
end
