class User < ApplicationRecord
  has_secure_password

  has_many :user_genders, dependent: :destroy
  has_many :genders, through: :user_genders

  has_many :user_ethnicities, dependent: :destroy
  has_many :ethnicities, through: :user_ethnicities

  has_many :user_skills, dependent: :destroy
  has_many :skills, through: :user_skills

  has_many :user_interests, dependent: :destroy
  has_many :interests, through: :user_interests

  has_one :mentor, dependent: :destroy
  has_one :mentee, dependent: :destroy

  has_many :mentorbot_messages, dependent: :destroy

  validates :email, presence: true, uniqueness: true
#   validates :password, presence: true
  # validates :date_of_birth, presence: true
  # validates :age, numericality: { greater_than_or_equal_to: 13 } # For Children’s Online Privacy Protection Act (COPPA) compliance

  def full_name
      "#{self.first_name} #{self.last_name}"
  end

  def gender
      name = self.genders[0].name
  end

  def ethnicity
      self.ethnicities[0].name
  end

  # def age
  #     age = Date.current.year - self.date_of_birth.year
  #     age -= 1 if Date.today < self.date_of_birth + age.years
  #     age
  # end
  
  # def is_adult?
  #     self.age >= 18
  # end

  def categories
    user_categories = (self.skills.map(&:categories) + self.interests.map(&:categories)).flatten.uniq
    user_categories
  end


end
