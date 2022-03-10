class Habit < ApplicationRecord
  belongs_to :user

  validates :habit_name, presence: true
  validates :goal_description, presence: true
  validates :goal_days, presence: true, numericality: { only_integer: true }
  validates :color_code, presence: true
end