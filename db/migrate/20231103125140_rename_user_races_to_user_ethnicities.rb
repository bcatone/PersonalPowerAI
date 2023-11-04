class RenameUserRacesToUserEthnicities < ActiveRecord::Migration[7.0]
  def change
    rename_table :user_races, :user_ethnicities
  end
end
