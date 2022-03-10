class HabitsController < ApplicationController

      def index
        render json: @current_user.habits
      end

      def show
        habit = Habit.find(params[:id])
        render json: habit
        end 
    
      def create
        habit = @current_user.habits.create!(habit_params)
        render json: habit, status: :created
      end

     def update
        habit = Habit.find(params[:id])
        habit.update!(habit_params)
        # habit = @current_user.habits.update!(habit_params)
        render json: habit, status: :created
     end

     def destroy
      # habit = Habit.find(params[:id])
    end
    
      private
    
      def habit_params
        params.permit(:habit_name, :goal_description, :goal_days, :user_id, :goal_tracker, :color_code)
      end
    
end
