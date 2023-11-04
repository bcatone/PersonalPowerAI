class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.bigint :sender, null: false, foreign_key: true
      t.bigint :receiver, null: false, foreign_key: true
      t.string :content
      t.boolean :is_read, default: false
      t.belongs_to :match, null: false, foreign_key: true

      t.timestamps
    end
  end
end
