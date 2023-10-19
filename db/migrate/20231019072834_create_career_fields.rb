class CreateCareerFields < ActiveRecord::Migration[7.0]
  def change
    create_table :career_fields do |t|
      t.string :name

      t.timestamps
    end
  end
end
