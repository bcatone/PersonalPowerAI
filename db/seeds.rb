require 'json'

# # ==========================================================
# #  SEED SKILLS AND INTERESTS OPTIONS BY CATEGORY
# # ==========================================================
# puts "Seeding skills and interests options by category..."

# # ----------------------------------------------------------
# #  Notes:   A category_types table was added to handle 
# #           potential updates to the matching algorithm 
# #           where distinguishing between career categories, 
# #           personal interest categories, and any future 
# #           category type(s) is necessary. Category types
# #           are not currently being utilized in the most 
# #           recent version of this project.
# #
# #           category_types, categories, skills, and 
# #           interests all have many-to-many relationships
# #           in case more than one relationship is needed.
# # ----------------------------------------------------------

# puts "Removing skills from the database..."
# Skill.destroy_all
# puts "Removing interests from the database..."
# Interest.destroy_all
# puts "Removing categories from the database..."
# Category.destroy_all
# puts "Removing category types from the database..."
# CategoryType.destroy_all

# puts "Seeding categories, skills, and interests..."


# categories_data = {
#   "STEM" => {
#     "Computer Science" => {
#       "skills" => ["Programming", "Algorithms", "Data Structures", "Software Development", "Web Development"],
#       "interests" => ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Cybersecurity", "Renewable Energy"]
#     },
#     "Electrical Engineering" => {
#       "skills" => ["Circuit Design", "Electronics", "Power Systems", "Digital Signal Processing", "Control Systems"],
#       "interests" => ["Microelectronics", "Embedded Systems", "Sustainable Infrastructure", "Urban Planning", "Bridge Design"]
#     },
#     "Mechanical Engineering" => {
#       "skills" => ["Mechanical Design", "Thermodynamics", "Fluid Mechanics", "Materials Science", "CAD/CAM"],
#       "interests" => ["Automotive Engineering", "Aerospace Engineering", "Robotics", "Product Design"]
#     },
#     "Civil Engineering" => {
#       "skills" => ["Structural Engineering", "Geotechnical Engineering", "Transportation Engineering", "Environmental Engineering", "Construction Management"],
#       "interests" => ["Sustainable Infrastructure", "Urban Planning", "Bridge Design", "Water Resources"]
#     },
#     "Biomedical Engineering" => {
#       "skills" => ["Medical Device Design", "Biomaterials", "Biomechanics", "Bioinformatics", "Tissue Engineering"],
#       "interests" => ["Healthcare Technology", "Medical Imaging", "Prosthetics", "Regenerative Medicine"]
#     },
#     "Environmental Science" => {
#       "skills" => ["Environmental Impact Assessment", "Climate Modeling", "Geographical Information Systems (GIS)", "Ecology", "Conservation Biology"],
#       "interests" => ["Climate Change", "Sustainability", "Biodiversity", "Environmental Policy"]
#     },
#     "Mathematics" => {
#       "skills" => ["Algebra", "Calculus", "Statistics", "Number Theory", "Combinatorics"],
#       "interests" => ["Pure Mathematics", "Applied Mathematics", "Cryptography", "Data Analysis"]
#     },
#     "Chemistry" => {
#       "skills" => ["Analytical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Chemical Engineering"],
#       "interests" => ["Drug Discovery", "Material Science", "Environmental Chemistry", "Chemical Synthesis"]
#     },
#     "Physics" => {
#       "skills" => ["Classical Mechanics", "Quantum Mechanics", "Electromagnetism", "Astrophysics", "Nuclear Physics"],
#       "interests" => ["Particle Physics", "Cosmology", "Optics", "Quantum Computing"]
#     },
#     "Aerospace Engineering" => {
#       "skills" => ["Aerodynamics", "Aircraft Design", "Spacecraft Systems", "Flight Control", "Propulsion"],
#       "interests" => ["Space Exploration", "Satellite Technology", "Aeronautics", "Rocket Science"]
#     },
#     "Data Science" => {
#       "skills" => ["Data Analysis", "Machine Learning", "Data Visualization", "Big Data Technologies", "Statistics"],
#       "interests" => ["Predictive Analytics", "Data Mining", "Business Intelligence", "Data Ethics"]
#     },
#     "Information Technology" => {
#       "skills" => ["Network Administration", "Cybersecurity", "IT Support", "Cloud Computing", "Database Management"],
#       "interests" => ["IT Security", "Network Infrastructure", "IT Project Management", "IT Consulting"]
#     },
#     "Robotics" => {
#       "skills" => ["Robotic Programming", "Control Systems", "Computer Vision", "Mechatronics", "Human-Robot Interaction"],
#       "interests" => ["Autonomous Robots", "Healthcare Robotics", "Industrial Automation", "Robotic Research"]
#     },
#     "Geology" => {
#       "skills" => ["Mineralogy", "Petrology", "Geophysics", "Hydrogeology", "Geological Mapping"],
#       "interests" => ["Geological Survey", "Oil and Gas Exploration", "Environmental Geology", "Earthquake Research"]
#     },
#     "Biochemistry" => {
#       "skills" => ["Enzyme Kinetics", "Molecular Biology", "Protein Chemistry", "Metabolism", "Genetic Engineering"],
#       "interests" => ["Drug Development", "Bioinformatics", "Biophysics", "Biochemical Research"]
#     },
#   },
#   "Social Good" => {
#     "Education" => {
#       "skills" => ["Teaching", "Curriculum Development", "Educational Technology", "Classroom Management", "Literacy"],
#       "interests" => ["Education Access", "Youth Empowerment", "Teacher Training", "Online Learning"]
#     },
#     "Environment" => {
#       "skills" => ["Environmental Conservation", "Sustainability", "Renewable Energy", "Ecosystem Management", "Climate Change Mitigation"],
#       "interests" => ["Green Initiatives", "Wildlife Protection", "Clean Energy", "Eco-friendly Practices"]
#     },
#     "Health and Wellness" => {
#       "skills" => ["Healthcare", "Nutrition", "Mental Health Counseling", "Public Health", "Medical Outreach"],
#       "interests" => ["Healthcare Equity", "Wellness Programs", "Mental Health Awareness", "Disease Prevention"]
#     },
#     "Social Justice" => {
#       "skills" => ["Advocacy", "Legal Research", "Human Rights", "Community Organizing", "Mediation"],
#       "interests" => ["Racial Equality", "LGBTQ+ Rights", "Criminal Justice Reform", "Gender Equality"]
#     },
#     "Poverty Alleviation" => {
#       "skills" => ["Economic Development", "Microfinance", "Job Training", "Financial Literacy", "Social Work"],
#       "interests" => ["Poverty Reduction", "Sustainable Livelihoods", "Social Entrepreneurship", "Access to Resources"]
#     },
#     "Community Development" => {
#       "skills" => ["Urban Planning", "Housing Development", "Community Engagement", "Infrastructure Improvement", "Grant Writing"],
#       "interests" => ["Neighborhood Revitalization", "Affordable Housing", "Civic Participation", "Local Empowerment"]
#     },
#     "Humanitarian Aid" => {
#       "skills" => ["Emergency Response", "Disaster Relief", "Refugee Assistance", "International Development", "Cross-cultural Communication"],
#       "interests" => ["Humanitarian Missions", "Conflict Resolution", "Refugee Support", "Global Relief Efforts"]
#     },
#     "Arts and Culture" => {
#       "skills" => ["Arts Education", "Cultural Preservation", "Creative Expression", "Event Planning", "Art Therapy"],
#       "interests" => ["Cultural Heritage", "Creative Empowerment", "Arts Accessibility", "Community Art Projects"]
#     },
#     "Elderly Care" => {
#       "skills" => ["Gerontology", "Elderly Companionship", "Senior Health Programs", "Retirement Planning", "Palliative Care"],
#       "interests" => ["Aging in Place", "Senior Community Engagement", "Healthcare for the Elderly", "Inter-generational Programs"]
#     },
#     "International Relations" => {
#       "skills" => ["Diplomacy", "Foreign Policy Analysis", "International Law", "Global Affairs", "Cultural Diplomacy"],
#       "interests" => ["Peacebuilding", "Diplomatic Relations", "Global Governance", "International Cooperation"]
#     },
#     "Youth Development" => {
#       "skills" => ["Youth Mentorship", "Youth Empowerment", "Life Skills Coaching", "After-school Programs", "Sports and Recreation"],
#       "interests" => ["Empowering Youth", "Leadership Development", "Youth Advocacy", "Social Skills Education"]
#     },
#   }
# }

# category_types_data = {
#   "STEM" => categories_data["STEM"].keys,
#   "Social Good" => categories_data["Social Good"].keys
# }

# category_types_data.each do |category_type_name, category_names|
#     puts "Seeding data for category type #{category_type.name}..."

#     category_type = CategoryType.find_or_create_by!(name: category_type_name)
#     puts "Found or created category type #{category_type.name}"

#     category_names.each do |category_name|
#         puts "Seeding data for category #{category_name}..."

#         category_data = categories_data[category_type_name][category_name]
#         category = Category.find_or_create_by!(name: category_name, category_type: category_type)
#         puts "Found or created category #{category.name} of type #{category.category_type}"

#         category_data["skills"].each do |skill_name|
#             skill = Skill.find_or_create_by!(name: skill_name, category: category)
#             puts "Found or created skill #{skill.name}"
#         end

#         category_data["interests"].each do |interest_name|
#         interest = Interest.find_or_create_by!(name: interest_name, category: category)
#             puts "Found or created interest #{interest.name}"
#         end
#     end
# end

# puts "Finished seeding categories, skills, and interests!"
# # ===========================================================


#=========================================================
# SEEDING SIMILAR CATEGORY LINKS
#=========================================================

# --------------------------------------------------------
#  Notes:   This data is based off the 
#           similar_categories.json file.
# --------------------------------------------------------

# puts "Removing existing similar category links from the database..."
# SimilarCategoryLink.destroy_all

# puts "Loading similar_categories.json..."
# similar_categories_file = File.read(Rails.root.join('client/src/components/Game/similar_categories.json'))
# similar_categories_data = JSON.parse(similar_categories_file)

# puts "Sorting JSON data..."
# sorted_keys = similar_categories_data.keys.sort

# sorted_similar_categories_data = {}

# sorted_keys.each do |key|
#   similar_categories = similar_categories_data[key]
#   sorted_similar_categories_data[key] = similar_categories&.sort || []
# end

# puts JSON.pretty_generate(sorted_similar_categories_data)

# puts "Seeding similar category links..."

# sorted_similar_categories_data.each do |category_name, similar_categories|
    
#     category_1 = Category.find_or_create_by!(name: category_name)
  
#     similar_categories.each do |similar_category_name|
#       category_2 = Category.find_by(name: similar_category_name)
  
#       # Avoid creating duplicate links
#       next if SimilarCategoryLink.exists?(category_1: category_1, category_2: category_2)
  
#       SimilarCategoryLink.create!(category_1: category_1, category_2: category_2)
#       puts "Created link from #{category_1.name} to #{category_2.name}"
#     end
#   end

#   puts "Finished seeding similar category links..."

#=========================================================


# # ==========================================================
# #  SEED UNDERREPRESENTED GROUP OPTIONS
# # ==========================================================
# puts "Seeding unrepresented group options..."

# # ----------------------------------------------------------
# #  Notes:   Intent behind this data is to allow mentees to
# #           seek support from a mentor who understands the
# #           unique challenges people of the user's
# #           demographics face in their field. Some or all
# #           of this data may be removed if the risk of 
# #           using this data for discriminatory reasons
# #           cannot be resolved.
# #
# #           If a future update of the matching algorithm
# #           includes this type of data point, LBGTGA+, 
# #           users raised in disadvantaged areas with lack of
# #           access to education, and other marginalized
# #           groups can be added.
# # ----------------------------------------------------------

# # ----------------------------------------------------------
# #  SEED GENDER OPTIONS
# #  Notes:   This was included since many people who are not
# #           cisgendered males have added challenges entering
# #           the STEM field. People who are transgender or 
# #           identify as someone other than male or female
# #           face additional societal challenges in general
# #           and having a mentor that shares that gender 
# #           identity may empower the mentee.
# #           
# #           The relationship between users and genders
# #           is many-to-many since many users identify as 
# #           more than one gender.
# #             
# #           This data is purposefully not a required field.
# #           
# #           This data is currently being stored but not used 
# #           in the matching algorithm in the most recent
# #           version of this project.
# # ----------------------------------------------------------
# puts "Removing existing genders from the database..."
# Gender.destroy_all

# puts "Seeding genders..."

# gender_names = [
#     "female",
#     "male",
#     "female-to-male transgender",
#     "male-to-female transgender",
#     "nonbinary",
#     "genderfluid",
#     "agender",
#     "other"
# ]

# gender_names.each do | gender |
#     new_gender = Gender.create!(name: gender)
#     puts "Created gender: #{new_gender.name}"
# end

# puts "Finished seeding genders!"

# # ----------------------------------------------------------
# #  SEED ETHNICITY OPTIONS
# #  Notes:   This was included since people of certain 
# #           ethnicities still face additional challenges
# #           to entering STEM fields in certain regions. A 
# #           mentor who has successfully overcame those 
# #           challenges may inspire the mentee. The line 
# #           between this data adding empowerment value 
# #           to the mentee and discrimination against users
# #           is thin and tricky to navigate, so this table
# #           may be removed if those challenges cannot be 
# #           resolved.
# #           
# #           The relationship between users and ethnicities
# #           is many-to-many since many users identify as 
# #           more than one ethnicity.
# #           
# #           This data is purposefully not a required field.
# # 
# #           This data is not being utilized in the most 
# #           recent version of this project.
# # ----------------------------------------------------------
# puts "Removing existing ethnicities from the database..."
# Ethnicity.destroy_all

# puts "Seeding ethnicities..."

# ethnicity_names = [
#     "White",
#     "Black or African American",
#     "Hispanic or Latino",
#     "Asian",
#     "Native American or American Indian",
#     "Native Hawaiian or Pacific Islander",
#     "Middle Eastern or Arab",
#     "Indigenous Peoples",
#     "Mixed or Multiracial",
#     "Caucasian",
#     "African",
#     "Afro-Caribbean",
#     "South Asian",
#     "East Asian",
#     "Southeast Asian",
#     "West Asian",
#     "Arab",
#     "Jewish",
#     "Romani or Gypsy",
#     "Inuit or Eskimo",
#     "Polynesian",
#     "Melanesian",
#     "Micronesian",
#     "Berber",
#     "Pashtun",
#     "Kurdish",
#     "Amazigh",
#     "Rohingya",
#     "Somali",
#     "Tibetan",
#     "Uighur",
#     "Zulu",
#     "Ashkenazi",
#     "Sephardic",
#     "Coptic",
#     "Igbo",
#     "Yoruba",
#     "Navajo",
#     "Ojibwe",
#     "Lakota",
#     "Sami",
#     "Inca",
#     "Aztec",
#     "Mayan",
#     "Aboriginal Torres Strait Islander"
#   ]
#   ethnicity_names.each do |ethnicity|
#     new_ethnicity = Ethnicity.create!(name: ethnicity)
#     puts "Created ethnicity #{new_ethnicity.name}"
#   end
# puts "Finished seeding ethnicities!"

# puts "Finished seeding underepresented group options!"
# # ===========================================================


# # ==========================================================
# #  SEED COMPATIBILITY OPTIONS
# # ==========================================================
# puts "Seeding compatibility options..."

# # ----------------------------------------------------------
# #  Notes:   This data is meant to prioritize matches that 
# #           would more likely be made organically if the 
# #           mentor and mentee had an opportunity to meet
# #           one another through another means.
# #           
# #           Some changes may need to be made to the
# #           table structure if this is implemented in a
# #           future version.
# # 
# #           This data is not being utilized in the most 
# #           recent version of this project.
# # ----------------------------------------------------------

# # ----------------------------------------------------------
# #  SEED COMMUNICATION STYLES
# # ----------------------------------------------------------
# puts "Removing existing communication styles from the database..."
# CommunicationStyle.destroy_all

# puts "Seeding communication styles..."

# communication_style_names = [
#     "Introverted",
#     "Ambivert/Balanced",
#     "Extroverted"
# ]

# communication_style_names.each do |communication_style|
#     new_communication_style = CommunicationStyle.create!(name: communication_style)
#     puts "Created communication style #{new_communication_style.name}"
# end

# puts "Finished seeding communication styles!"

# # ----------------------------------------------------------
# #  SEED EMPATHY STYLES
# # ----------------------------------------------------------
# puts "Removing existing empathy styles from the database..."
# EmpathyStyle.destroy_all

# puts "Seeding empathy styles..."

# empathy_style_names = [
#     "Analytical",
#     "Supportive",
#     "Compassionate"
# ]

# empathy_style_names.each do |empathy_style|
#     new_empathy_style = EmpathyStyle.create!(name: empathy_style)
#     puts "Created empathy style #{new_empathy_style.name}"
# end

# puts "Finished seeding empathy styles!"

# # ----------------------------------------------------------
# #  SEED WORK STYLES
# # ----------------------------------------------------------
# puts "Removing existing work styles from the database..."
# WorkStyle.destroy_all

# puts "Seeding work styles..."

# work_style_names = [
#     "Adaptable",
#     "Methodological",
#     "Proactive"
# ]

# work_style_names.each do |work_style|
#     new_work_style = WorkStyle.create!(name: work_style)
#     puts "Created work style #{new_work_style.name}"
# end

# puts "Finished seeding work styles!"

# # ----------------------------------------------------------
# #  SEED COLLABORATION STYLES
# # ----------------------------------------------------------
# puts "Removing existing collaboration styles from the database..."
# CollaborationStyle.destroy_all

# puts "Seeding collaboration styles..."

# collaboration_style_names = [
#     "Independent worker",
#     "Balanced",
#     "Team player"
# ]

# collaboration_style_names.each do |collaboration_style|
#     new_collaboration_style = CollaborationStyle.create!(name: collaboration_style)
#     puts "Created collaboration style #{new_collaboration_style.name}"
# end

# puts "Finished seeding collaboration styles!"

# # ----------------------------------------------------------
# #  SEED PROBLEM-SOLVING STYLES
# # ----------------------------------------------------------
# puts "Removing existing problem-solving styles from the database..."
# ProblemSolvingStyle.destroy_all

# puts "Seeding problem-solving styles..."

# problem_solving_style_names = [
#     "Creative",
#     "Innovative",
#     "Logical"
# ]

# problem_solving_style_names.each do |problem_solving_style|
#     new_problem_solving_style = ProblemSolvingStyle.create!(name: problem_solving_style)
#     puts "Created problem-solving style #{new_problem_solving_style.name}"
# end

# puts "Finished seeding problem-solving styles!"

# # ----------------------------------------------------------
# #  SEED LEARNING STYLES
# # ----------------------------------------------------------
# puts "Removing existing learning styles from the database..."
# LearningStyle.destroy_all

# puts "Seeding learning styles..."

# learning_style_names = [
#     "Visual",
#     "Auditory",
#     "Kinesthetic"
# ]

# learning_style_names.each do |learning_style|
#     new_learning_style = LearningStyle.create!(name: learning_style)
#     puts "Created learning style #{new_learning_style.name}"
# end

# puts "Finished seeding learning styles!"

# # ----------------------------------------------------------
# #  SEED LEADERSHIP STYLES
# # ----------------------------------------------------------
# puts "Removing existing leadership styles from the database..."
# LeadershipStyle.destroy_all

# puts "Seeding leadership styles..."

# leadership_style_names = [
#     "Servant",
#     "Collaborative",
#     "Authoritative"
# ]

# leadership_style_names.each do |leadership_style|
#     new_leadership_style = LeadershipStyle.create!(name: leadership_style)
#     puts "Created leadership style #{new_leadership_style.name}"
# end

# puts "Finished seeding leadership styles!"

# # ----------------------------------------------------------
# #  SEED CONFLICT RESOLUTION STYLES
# # ----------------------------------------------------------
# puts "Removing existing conflict-resolution styles from the database..."
# ConflictResolutionStyle.destroy_all

# puts "Seeding conflict-resolution styles..."

# conflict_resolution_style_names = [
#     "Avoidant",
#     "Diplomatic",
#     "Confrontational"
# ]

# conflict_resolution_style_names.each do |conflict_resolution_style|
#     new_conflict_resolution_style = ConfictResolutionStyle.create!(name: conflict_resolution_style)
#     puts "Created conflict-resolution style #{new_conflict_resolution_style.name}"
# end

# puts "Finished seeding conflict-resolution styles!"

# # ----------------------------------------------------------
# #  SEED TIME-MANAGEMENT STYLES
# # ----------------------------------------------------------
# puts "Removing existing time-management styles from the database..."
# TimeManagementStyle.destroy_all

# puts "Seeding time-management styles..."

# time_management_style_names = [
#     "Flexible",
#     "Detail-oriented",
#     "Punctual"
# ]

# time_management_style_names.each do |time_management_style|
#     new_time_management_style = TimeManagementStyle.create!(name: time_management_style)
#     puts "Created time-management style #{new_time_management_style.name}"
# end

# puts "Finished seeding time-management styles!"

# # ----------------------------------------------------------
# #  SEED STRESS-MANAGEMENT STYLES
# # ----------------------------------------------------------
# puts "Removing existing stress-management styles from the database..."
# StressManagementStyle.destroy_all

# puts "Seeding stress-management styles..."

# stress_management_style_names = [
#     "Anxious",
#     "Calm under pressure",
#     "Resilient"
# ]

# stress_management_style_names.each do |stress_management_style|
#     new_stress_management_style = StressManagementStyle.create!(name: stress_management_style)
#     puts "Created stress-management style #{new_stress_management_style.name}"
# end

# puts "Finished seeding stress-management styles!"

# puts "Finished seeding compatibility options!"
# #=========================================================


# #=========================================================
# # SEEDING MENTORS
# #=========================================================

# # --------------------------------------------------------
# #  Notes:   This data is based off the random_mentors.json
# #           file.
# # --------------------------------------------------------

# puts "Removing existing mentors from the database..."
# Mentor.destroy_all

# puts "Loading random_mentors.json..."
# mentor_data_file = File.read(Rails.root.join('client/src/components/Game/random_mentors.json'))
# mentor_data = JSON.parse(mentor_data_file)

# puts "Seeding mentors..."

# i = 1;

# mentor_data.each do |mentor_name, mentor_info|

#     first_name, last_name = mentor_name.split(' ', 2)

    

#     mentor = Mentor.find_or_create_by!(user: User.find_or_create_by!(email: "test_mentor_#{i}@example.com", password_digest: "password", first_name: first_name, last_name: last_name))
#     puts "Created mentor #{mentor.user.first_name} #{mentor.user.last_name}"

#     mentor_info['skills'].each do |skill_name|
#       skill = Skill.find_or_create_by!(name: skill_name)
#       mentor.user.skills << skill unless mentor.user.skills.include?(skill)
#       puts "Added skill #{skill_name} to mentor #{mentor.user.first_name} #{mentor.user.last_name}"
#     end
  
#     mentor_info['interests'].each do |interest_name|
#       interest = Interest.find_or_create_by!(name: interest_name)
#       mentor.user.interests << interest unless mentor.user.interests.include?(interest)
#       puts "Added interest #{interest_name} to mentor #{mentor.user.first_name} #{mentor.user.last_name}"
#     end

#     i += 1

#   end

#   puts "Finished seeding mentors!"



