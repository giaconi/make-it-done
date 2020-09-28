module Api
  module V1
    class ListsController < ApplicationController
      def create
        task = current_user.tasks.new(task_params)

        if task.save
          render json: serializer(task)
        else
          render json: errors(task), status: 422
        end
      end

      # DELETE /api/v1/tasks/:id
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
        params.require(:task).permit(:description, :done, :duration, :list_id)
      end

      # fast_jsonapi serializer
      def serializer(records, options = {})
        taskSerializer
          .new(records, options)
          .serialized_json
      end

      def errors(record)
        { errors: record.errors.messages }
      end
      
    end
  end
end
