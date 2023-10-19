class CreateUserCareers < ActiveRecord::Migration[7.0]
  def change
    create_table :user_careers do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :career_title, null: false, foreign_key: true
      t.string :company
      t.datetime :start_date
      t.datetime :end_date
      t.boolean :is_current
      t.text :description

      t.timestamps
    end
  end
end
