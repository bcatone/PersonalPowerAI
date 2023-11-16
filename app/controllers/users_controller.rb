class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    # Returns all users (mentors and mentees)
    def index
        render json: User.all, status: :ok
    end

    # Returns one specified user
    def show
        render json: User.find(params[:id]), status: :ok
    end

    # Creates a new user on registration
    # This may be refactored to use seperate routes at a later stage
    def create

      
        # @user = User.create!(user_params)

        # Temporary workaround over bcrypt issue for development
        # Make more secure before deploying
        @user = User.create!(email: params[:email], password: params[:password], first_name: params[:name], timezone: params[:timezone], expertise: params[:expertise])
        
        name_parts = split_name(params[:name])
      puts name_parts

        if params[:mentor]
            Mentor.create!(user: @user)
        else params[:mentee]
            Mentee.create!(user: @user)
        end

        # Temporary code until gender selection changes from text input to option select on frontend
        gender_input = params[:gender]

        if gender_input
            closest_match = find_closest_gender(gender_input)
            UserGender.create!(user: @user, gender: closest_match) unless !closest_match
        end

        render json: @user, status: :created
    end

    # Updates the user
    def update
        render json: User.update!(user_params), status: :accepted
    end

    # Deletes the user's information from the database (deletes the account)
    def destroy
        user = User.find_by(id: params[:id])
        if user&.authenticate(params[:password])
            user.destroy
            head :no_content
        else 
            render json:{ errors: "Invalid password"}, status: :unauthorized
        end
    end

    private

    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation, :email, :phone_number, :first_name, :middle_name, :last_name, :suffix, :date_of_birth, :city, :state, :country, :zip_code, :timezone, :expertise)
    end

    # Temporary code until name field is seperated into seperate fields
    def split_name(nameTextInput)
        name_parts = nameTextInput.split(' ')

        case name_parts.length
        when 1
          @user.first_name = name_parts[0]
        when 2
          @user.first_name = name_parts[0]
          @user.last_name = name_parts[1]
        when 3
          @user.first_name = name_parts[0]
      
          # Check if name_parts[2] is a suffix (e.g., Jr., Sr.)
          if name_parts[2].match?(/^(Jr\.|Sr\.|II|III|IV|V|VI|VII|VIII|IX)$/i)
            @user.suffix = name_parts[2]
          else
            @user.middle_name = name_parts[1]
            @user.last_name = name_parts[2]
          end
        when 4
          @user.first_name = name_parts[0]
          @user.middle_name = name_parts[1]
          @user.last_name = name_parts[2]
          @user.suffix = name_parts[3]
    end

    # Temporary code until gender selection changes from text input to option select on frontend

    def find_closest_gender(input_gender)
        # Create a hash to store synonyms for each gender
        gender_synonyms = {
          "female" => ["woman", "girl", "feminine"],
          "male" => ["man", "boy", "masculine"],
          "nonbinary" => ["enby", "genderqueer"],
          "genderfluid" => ["fluid", "changing"],
          "agender" => ["neutral", "neither"],
          "other" => ["unknown", "not specified", "n/a"]
        }
      
        # Initialize variables for the closest match and distance
        closest_match = nil
        closest_distance = Float::INFINITY  # Initialize to positive infinity
      
        Gender.all.each do |gender|
          # Check if the input gender exactly matches a gender in the table
          if gender.name.downcase == input_gender.downcase
            return gender  # Exact match found
          end
      
          # Check for synonyms
          gender_synonyms[gender.name.downcase].each do |synonym|
            distance = levenshtein_distance(input_gender, synonym)
      
            if distance < closest_distance
              closest_match = gender
              closest_distance = distance
            end
          end
        end
      
        # Check if any match was found
        if closest_match
          return closest_match
        else
          return nil
        end
      end
    end
    
    def levenshtein_distance(str1, str2)
        m = str1.length
        n = str2.length
        dp = Array.new(m + 1) { Array.new(n + 1) }
    
        (0..m).each { |i| dp[i][0] = i }
        (0..n).each { |j| dp[0][j] = j }
    
        (1..m).each do |i|
          (1..n).each do |j|
            cost = str1[i - 1] == str2[j - 1] ? 0 : 1
            dp[i][j] = [dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost].min
          end
        end
    
        dp[m][n]
    end
    
end
