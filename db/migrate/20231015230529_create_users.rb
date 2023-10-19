class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :phone
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :suffix
      t.string :date_of_birth
      t.string :city
      t.string :state
      t.string :country
      t.string :zip_code
      t.string :timezone

      t.timestamps
    end
  end
end
