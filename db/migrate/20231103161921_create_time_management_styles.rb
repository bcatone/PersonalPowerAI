class CreateTimeManagementStyles < ActiveRecord::Migration[7.0]
  def change
    create_table :time_management_styles do |t|
      t.string :name

      t.timestamps
    end
  end
end
