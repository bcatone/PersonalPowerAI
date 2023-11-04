class CreateLeadershipStyles < ActiveRecord::Migration[7.0]
  def change
    create_table :leadership_styles do |t|
      t.string :name

      t.timestamps
    end
  end
end
