# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# puts "Seeding genders..."
# genders = [
#     "female",
#     "male",
#     "female-to-male transgender",
#     "male-to-female transgender",
#     "nonbinary",
#     "genderfluid",
#     "agender",
#     "other"
# ].each do | gender |
#     new_gender = Gender.create!(name: gender)
#     puts "Created gender: #{new_gender}"
# end
# puts "Finished seeding genders!"

# puts "Seeding races..."
# races = [
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
#   races.each do |race|
#     new_race = Race.create(name: race)
#     puts "Created race #{new_race[:name]}"
#   end
# puts "Finished seeding races!"

# db/seeds.rb

# # Clear existing data
# CategoryInterest.destroy_all
# CategorySkill.destroy_all
# Category.destroy_all
# Skill.destroy_all
# Interest.destroy_all

# # Define seed data for STEM categories
# stem_categories = [
#   "Computer Science",
#   "Electrical Engineering",
#   "Mechanical Engineering",
#   "Civil Engineering",
#   "Biomedical Engineering",
#   "Environmental Science",
#   "Mathematics",
#   "Chemistry",
#   "Physics",
#   "Aerospace Engineering",
#   "Data Science",
#   "Information Technology",
#   "Robotics",
#   "Geology",
#   "Biochemistry"
# ]

# # Define seed data for social good categories
# social_good_categories = [
#   "Education",
#   "Environment",
#   "Health and Wellness",
#   "Social Justice",
#   "Poverty Alleviation",
#   "Community Development",
#   "Humanitarian Aid",
#   "Arts and Culture",
#   "Elderly Care",
#   "Animal Welfare",
#   "LGBTQ+ Support",
#   "Food Security",
#   "Youth Empowerment",
#   "Clean Water and Sanitation",
#   "Disabilities Support"
# ]

# # Create STEM and social good categories with skills and interests
# (stem_categories + social_good_categories).each do |category_name|
#   category = Category.create!(name: category_name)
#   puts "Created category name: #{category_name}"
  
#   # Define seed data for skills and interests
#   skills_and_interests = {
#     "Computer Science" => {
#       skills: ["Programming", "Algorithms", "Data Structures", "Software Development", "Web Development"],
#       interests: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Cybersecurity", "Renewable Energy"]
#     },
#     "Electrical Engineering" => {
#       skills: ["Circuit Design", "Electronics", "Power Systems", "Digital Signal Processing", "Control Systems"],
#       interests: ["Microelectronics", "Embedded Systems", "Sustainable Infrastructure", "Urban Planning", "Bridge Design"]
#     },
#     "Mechanical Engineering" => {
#       skills: ["Mechanical Design", "Thermodynamics", "Fluid Mechanics", "Materials Science", "CAD/CAM"],
#       interests: ["Automotive Engineering", "Aerospace Engineering", "Robotics", "Product Design"]
#     },
#     "Civil Engineering" => {
#       skills: ["Structural Engineering", "Geotechnical Engineering", "Transportation Engineering", "Environmental Engineering", "Construction Management"],
#       interests: ["Sustainable Infrastructure", "Urban Planning", "Bridge Design", "Water Resources"]
#     },
#     "Biomedical Engineering" => {
#       skills: ["Medical Device Design", "Biomaterials", "Biomechanics", "Bioinformatics", "Tissue Engineering"],
#       interests: ["Healthcare Technology", "Medical Imaging", "Prosthetics", "Regenerative Medicine"]
#     },
#     "Environmental Science" => {
#       skills: ["Environmental Impact Assessment", "Climate Modeling", "Geographical Information Systems (GIS)", "Ecology", "Conservation Biology"],
#       interests: ["Climate Change", "Sustainability", "Biodiversity", "Environmental Policy"]
#     },
#     "Mathematics" => {
#       skills: ["Algebra", "Calculus", "Statistics", "Number Theory", "Combinatorics"],
#       interests: ["Pure Mathematics", "Applied Mathematics", "Cryptography", "Data Analysis"]
#     },
#     "Chemistry" => {
#       skills: ["Analytical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Chemical Engineering"],
#       interests: ["Drug Discovery", "Material Science", "Environmental Chemistry", "Chemical Synthesis"]
#     },
#     "Physics" => {
#       skills: ["Classical Mechanics", "Quantum Mechanics", "Electromagnetism", "Astrophysics", "Nuclear Physics"],
#       interests: ["Particle Physics", "Cosmology", "Optics", "Quantum Computing"]
#     },
#     "Aerospace Engineering" => {
#       skills: ["Aerodynamics", "Aircraft Design", "Spacecraft Systems", "Flight Control", "Propulsion"],
#       interests: ["Space Exploration", "Satellite Technology", "Aeronautics", "Rocket Science"]
#     },
#     "Data Science" => {
#       skills: ["Data Analysis", "Machine Learning", "Data Visualization", "Big Data Technologies", "Statistics"],
#       interests: ["Predictive Analytics", "Data Mining", "Business Intelligence", "Data Ethics"]
#     },
#     "Information Technology" => {
#       skills: ["Network Administration", "Cybersecurity", "IT Support", "Cloud Computing", "Database Management"],
#       interests: ["IT Security", "Network Infrastructure", "IT Project Management", "IT Consulting"]
#     },
#     "Robotics" => {
#       skills: ["Robotic Programming", "Control Systems", "Computer Vision", "Mechatronics", "Human-Robot Interaction"],
#       interests: ["Autonomous Robots", "Healthcare Robotics", "Industrial Automation", "Robotic Research"]
#     },
#     "Geology" => {
#       skills: ["Mineralogy", "Petrology", "Geophysics", "Hydrogeology", "Geological Mapping"],
#       interests: ["Geological Survey", "Oil and Gas Exploration", "Environmental Geology", "Earthquake Research"]
#     },
#     "Biochemistry" => {
#       skills: ["Enzyme Kinetics", "Molecular Biology", "Protein Chemistry", "Metabolism", "Genetic Engineering"],
#       interests: ["Drug Development", "Bioinformatics", "Biophysics", "Biochemical Research"]
#     },
#     "Education" => {
#       skills: ["Teaching", "Curriculum Development", "Educational Technology", "Classroom Management", "Literacy"],
#       interests: ["Education Access", "Youth Empowerment", "Teacher Training", "Online Learning"]
#     },
#     "Environment" => {
#       skills: ["Environmental Conservation", "Sustainability", "Renewable Energy", "Ecosystem Management", "Climate Change Mitigation"],
#       interests: ["Green Initiatives", "Wildlife Protection", "Clean Energy", "Eco-friendly Practices"]
#     },
#     "Health and Wellness" => {
#       skills: ["Healthcare", "Nutrition", "Mental Health Counseling", "Public Health", "Medical Outreach"],
#       interests: ["Healthcare Equity", "Wellness Programs", "Mental Health Awareness", "Disease Prevention"]
#     },
#     "Social Justice" => {
#       skills: ["Advocacy", "Legal Research", "Human Rights", "Community Organizing", "Mediation"],
#       interests: ["Racial Equality", "LGBTQ+ Rights", "Criminal Justice Reform", "Gender Equality"]
#     },
#     "Poverty Alleviation" => {
#       skills: ["Economic Development", "Microfinance", "Job Training", "Financial Literacy", "Social Work"],
#       interests: ["Poverty Reduction", "Sustainable Livelihoods", "Social Entrepreneurship", "Access to Resources"]
#     },
#     "Community Development" => {
#       skills: ["Urban Planning", "Housing Development", "Community Engagement", "Infrastructure Improvement", "Grant Writing"],
#       interests: ["Neighborhood Revitalization", "Affordable Housing", "Civic Participation", "Local Empowerment"]
#     },
#     "Humanitarian Aid" => {
#       skills: ["Emergency Response", "Disaster Relief", "Refugee Assistance", "International Development", "Cross-cultural Communication"],
#       interests: ["Humanitarian Missions", "Conflict Resolution", "Refugee Support", "Global Relief Efforts"]
#     },
#     "Arts and Culture" => {
#       skills: ["Arts Education", "Cultural Preservation", "Creative Expression", "Event Planning", "Art Therapy"],
#       interests: ["Cultural Heritage", "Creative Empowerment", "Arts Accessibility", "Community Art Projects"]
#     },
#     "Elderly Care" => {
#       skills: ["Gerontology", "Elderly Companionship", "Healthcare for Seniors", "Aging in Place Support", "Geriatric Counseling"],
#       interests: ["Senior Services", "Aging Gracefully", "Dementia Care", "Elderly Rights"]
#     },
#     "Animal Welfare" => {
#       skills: ["Animal Care", "Wildlife Conservation", "Animal Behavior", "Pet Adoption", "Animal Rights Advocacy"],
#       interests: ["Wildlife Protection", "Animal Rescue", "Responsible Pet Ownership", "Habitat Preservation"]
#     },
#     "LGBTQ+ Support" => {
#       skills: ["LGBTQ+ Advocacy", "Counseling", "Support Groups", "Anti-discrimination Training", "LGBTQ+ Health Services"],
#       interests: ["LGBTQ+ Rights", "Inclusivity", "Gender Equality", "Pride Events"]
#     },
#     "Food Security" => {
#       skills: ["Food Distribution", "Agricultural Development", "Food Banks", "Nutrition Education", "Sustainable Farming"],
#       interests: ["Hunger Relief", "Food Sustainability", "Nutrition Access", "Reducing Food Waste"]
#     },
#     "Youth Empowerment" => {
#       skills: ["Youth Mentorship", "Youth Leadership", "After-school Programs", "Youth Counseling", "Skill-building Workshops"],
#       interests: ["Empowering Youth", "Youth Engagement", "Educational Opportunities", "Youth Entrepreneurship"]
#     },
#     "Clean Water and Sanitation" => {
#       skills: ["Water Purification", "Sanitation Engineering", "Hygiene Education", "Water Access Projects", "Wastewater Management"],
#       interests: ["Clean Water Initiatives", "Sanitation Improvement", "Water Quality", "Access to Safe Water"]
#     },
#     "Disabilities Support" => {
#       skills: ["Disability Advocacy", "Accessibility Planning", "Disability Services", "Assistive Technology", "Inclusive Education"],
#       interests: ["Disability Rights", "Inclusivity", "Empowering Individuals with Disabilities", "Accessibility"]
#     }
#   }
  
#   skills_and_interests[category_name][:skills].each do |skill_name|
#     skill = Skill.create!(name: skill_name)
#     puts "Created skill name: #{skill_name}"
#     CategorySkill.create!(category: category, skill: skill)
#     puts "Created CategorySkill category: #{category_name} skill:#{skill_name}"
#   end
  
#   skills_and_interests[category_name][:interests].each do |interest_name|
#     interest = Interest.create!(name: interest_name)
#     puts "Created interest name: #{interest_name}"
#     CategoryInterest.create!(category: category, interest: interest)
#     puts "Created CategoryInterest category: #{category_name} interest: #{interest_name}\n\n"
#   end
# end

# # Output a confirmation message
# puts "Seed data for categories, skills, and interests has been successfully"