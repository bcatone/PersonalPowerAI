class CreateCommunicationStyles < ActiveRecord::Migration[7.0]
  def change
    create_table :communication_styles do |t|
      t.string :name

      t.timestamps
    end
  end
end
