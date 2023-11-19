class CreateConflictResolutionStyles < ActiveRecord::Migration[7.0]
  def change
    create_table :conflict_resolution_styles do |t|
      t.string :name

      t.timestamps
    end
  end
end
