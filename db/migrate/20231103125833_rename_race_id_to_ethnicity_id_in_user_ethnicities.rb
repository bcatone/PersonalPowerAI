class RenameRaceIdToEthnicityIdInUserEthnicities < ActiveRecord::Migration[7.0]
  def change
    rename_column :user_ethnicities, :race_id, :ethnicity_id
  end
end
