class CreateUserInterests < ActiveRecord::Migration[7.0]
  def change
    create_table :user_interests do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :interest, null: false, foreign_key: true
      t.boolean :is_important_match_criteria, default: false
      
      t.timestamps
    end
  end
end
