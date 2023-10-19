class AI < ApplicationRecord

    def ai_mentor_info
        user = current_user.id
        
        render json: user, serializer: CurrentUserSerializer, status: :ok
    end
end
