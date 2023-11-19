class MessagesController < ApplicationController

    def index
        render json: Message.all, status: :ok
    end

    def show
        render json: Message.find(params[:id]), status: :ok
    end

    def create
        render json: Message.create!(message_params), status: :created
    end

    def update
        message = Message.find(params[:id])
        render json: message.update!(message_params), status: :accepted
    end

    def destroy
        message = Message.find(params[:id])
        message.destroy!
        head :no_content
    end

    private

    def message_params
        params.require(:message).permit(:match_id, sender_id, :receiver_id, :content)
    end
end
