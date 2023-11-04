class CreateLearningStyles < ActiveRecord::Migration[7.0]
  def change
    create_table :learning_styles do |t|
      t.string :name

      t.timestamps
    end
  end
end
