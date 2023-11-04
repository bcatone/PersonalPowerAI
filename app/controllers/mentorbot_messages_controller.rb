class MentorbotMessagesController < ApplicationController

    def index
        return MentorBotMessages.all, status: :ok
    end

    def show
        render json: MentorBotMessages.find_by!(user_id: params[:user_id])
    end

    def create
        render json: MentorBotMessages.create!(mentorbot_message_params)
    end

    def destroy
        mentorbot_message = MentorBotMessage.find(params[:id])
        mentorbot_message.destroy
        mentorbot_message :no_content
    end

    private

    def mentorbot_message_params
        params.require(:mentorbot_messages).permit(:user_id, :role, :content)
    end
end
