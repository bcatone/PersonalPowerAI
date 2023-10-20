class AiController < ApplicationController
    skip_before_action :authorized_user

    def chat_prompt_data
        
        render json: current_user, serializer: UserSerializer, status: :ok
    end

    def match_prompt_data

        # current user (id, match criteria only)
        # all mentor records (id, match criteria only)

        # mentors = Mentor.select(:id).includes(:skills, :interests, :genders, :races)

        @mentors = Mentor.all

        mentors = []

        @mentors.each do |mentor|
            user = mentor.user
            mentor_obj = {
                skills: user.skills,
                interests: user.interests,
                genders: user.genders,
                races: user.races
            }

            mentors << mentor_obj
        end

        match_data = {
            mentee_id: current_user.id,
            skills: current_user.skills,
            interests: current_user.interests,
            mentors: mentors
        }

        render json: match_data, status: :ok
    end

    def get_cards
        # render array of cards (max 5)
    end

    private

    def gender_prompt(user)
        gender = user.genders[0]
        prompt = "I would prefer to be matched with a mentor that has experience as a #{gender} person."
        prompt
    end

    def race_prompt(user)
        race = user.races[0]
        prompt = "I would prefer to be matched with a mentor that has experience as a #{race} person."
        prompt
    end

end
