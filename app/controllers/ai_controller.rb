class AiController < ApplicationController
    skip_before_action :authorized_user

    def chat_prompt_data
        render json: current_user, status: :ok
    end

    def match_prompt_data

        @mentors = Mentor.all

        mentors = []

        @mentors.each do |mentor|
            user = mentor.user
            mentor_obj = {
                skills: user.skills,
                interests: user.interests,
                genders: user.genders,
                ethnicities: user.ethnicities
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

    private

    def gender_prompt(user)
        @gender = user.genders[0]
        prompt = "I would prefer to be matched with a mentor that has experience as a #{@gender} person."
        prompt
    end

    def ethnicity_prompt(user)
        @ethnicity = user.ethnicities[0]
        prompt = "I would prefer to be matched with a mentor that has experience as a #{@ethnicity} person."
        prompt
    end

end
