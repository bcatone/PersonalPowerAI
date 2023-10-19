class CreateUserGenders < ActiveRecord::Migration[7.0]
  def change
    create_table :user_genders do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :gender, null: false, foreign_key: true
      t.boolean :is_important_match_criteria, default: false

      t.timestamps
    end
  end
end
