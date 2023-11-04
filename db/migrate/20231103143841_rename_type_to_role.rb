class RenameTypeToRole < ActiveRecord::Migration[7.0]
  def change
    rename_column :mentorbot_messages, :type, :role
  end
end
