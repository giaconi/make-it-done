module Api
  module V1
    class TasksController < ApplicationController

      def create
        description = task_params[:description]
        duration = task_params[:duration]
        list_id = task_params[:list_id]
        task = Task.new(description: description, duration: duration, list_id: list_id)

        if task.save
          render json: serializer(task)
        else
          render json: errors(task), status: 422
        end
      end

      # DELETE /api/v1/list/tasks/:id
      def destroy
        task = current_user.tasks.find(params[:id])

        if task.destroy
          head :no_content
        else
          render json: errors(task), status: 422
        end
      end

      private

      # Strong params
      def task_params
        params.require(:task).permit(:description, :duration, :list_id)
      end

      # fast_jsonapi serializer
      def serializer(records, options = {})
        TaskSerializer
          .new(records, options)
          .serialized_json
      end

      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end
