class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :middle_name, :last_name, :suffix, :date_of_birth, :city, :state, :country, :zip_code, :timezone, :gender, :genders, :expertise, :interests, :skills

  def genders
    user_genders = self.object.genders

    names = []

    user_genders.each do |gender|
      names << gender.name
    end

    names
  end
  
  def interests
    user_interests = self.object.interests

    names = []

    user_interests.each do |interest|
      names << interest.name
    end

    names
  end

  def skills
    user_skills = self.object.skills
  
    names = []
  
    user_skills.each do |skill|
      names << skill.name
    end
    
    names
  end
end


