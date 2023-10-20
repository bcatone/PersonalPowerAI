class User < ApplicationRecord
  has_secure_password

  has_many :user_genders
  has_many :genders, through: :user_genders

  has_many :user_races
  has_many :races, through: :user_races
  
  has_many :user_skills
  has_many :skills, through: :user_skills

  has_many :user_interests
  has_many :interests, through: :user_interests

  has_many :user_careers

  has_one :mentor
  has_one :mentee

  validates :email, presence: true, uniqueness: true
  validates :date_of_birth, presence: true
  # validates :age, numericality: { greater_than_or_equal_to: 13 }

  def full_name
    "#{self.first_name} #{self.last_name}"
  end
  
  def age
    "?"
    # age = Date.current.year - self.date_of_birth.year
    # age -= 1 if Date.today < self.date_of_birth + age.years
    # age
  end

  def is_adult?
    self.age >= 18
  end


end
