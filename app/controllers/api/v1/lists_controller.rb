module Api
  module V1
    class ListsController < ApplicationController

      def index
        lists = current_user.lists.order('created_at ASC')

        render json: ListSerializer.new(lists, options).serialized_json
      end
      
      def show
         list = current_user.lists.find_by(slug: params[:slug])

         render json: ListSerializer.new(list, options).serialized_json
      end

      def create
        list = List.new(list_params)

        if list.save
          render json: ListSerializer.new(list).serialized_json
        else
          render json: { error: list.errors.messages }, status: 422
        end
      end

      def update
        list = current_user.lists.find_by(slug: params[:slug])

        if list.update(list_params)
          render json: ListSerializer.new(list, options).serialized_json
        else
          render json: { error: list.errors.messages }, status: 422
        end
      end

      def destroy
        list = current_user.lists.find_by(slug: params[:slug])

        if list.destroy
          head :no_content
        else
          render json: { error: list.errors.messages }, status: 422
        end
      end

      private
       
    def list_params
      params.require(:list).permit(:title)
    end

    def options
      @ptions ||= { include: [:tasks] }
    end
       
    end
  end
end