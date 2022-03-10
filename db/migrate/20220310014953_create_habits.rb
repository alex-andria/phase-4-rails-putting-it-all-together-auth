class CreateHabits < ActiveRecord::Migration[6.1]
  def change
    create_table :habits do |t|
      t.string :habit_name
      t.string :goal_description
      t.integer :goal_days
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :goal_tracker
      t.string :color_code

      t.timestamps
    end
  end
end
