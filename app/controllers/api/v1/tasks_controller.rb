module Api
  module V1
    class TasksController < ApplicationController

      def create
        task = Task.new(task_params)

        if task.save
          render json: serializer(task)
        else
          render json: errors(task), status: 422
        end
      end

      def update
        task = Task.find(params[:id])

        if task.update(task_params)
          render json: serializer(task)
        else
          render json: errors(task), status: 422
        end
      end

      # DELETE /api/v1/list/tasks/:id
      #  Not necessary as I'll update the state to done and then it will go the end of list
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
        params.require(:task).permit(:description, :duration, :list_id, :id, :done)
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
