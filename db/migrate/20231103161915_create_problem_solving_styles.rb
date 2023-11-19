class CreateProblemSolvingStyles < ActiveRecord::Migration[7.0]
  def change
    create_table :problem_solving_styles do |t|
      t.string :name

      t.timestamps
    end
  end
end
