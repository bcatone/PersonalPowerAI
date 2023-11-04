class RenameRacesToEthnicities < ActiveRecord::Migration[7.0]
  def change
    rename_table :races, :ethnicities
  end
end
