class CreateMentorbotMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :mentorbot_messages do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :type
      t.text :content

      t.timestamps
    end
  end
end
