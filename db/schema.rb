# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_11_10_164339) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "career_fields", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "career_titles", force: :cascade do |t|
    t.string "name"
    t.bigint "career_field_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["career_field_id"], name: "index_career_titles_on_career_field_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "category_interests", force: :cascade do |t|
    t.string "name"
    t.bigint "category_id", null: false
    t.bigint "interest_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_category_interests_on_category_id"
    t.index ["interest_id"], name: "index_category_interests_on_interest_id"
  end

  create_table "category_skills", force: :cascade do |t|
    t.bigint "category_id", null: false
    t.bigint "skill_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_category_skills_on_category_id"
    t.index ["skill_id"], name: "index_category_skills_on_skill_id"
  end

  create_table "category_type_connections", force: :cascade do |t|
    t.bigint "category_type_id", null: false
    t.bigint "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_category_type_connections_on_category_id"
    t.index ["category_type_id"], name: "index_category_type_connections_on_category_type_id"
  end

  create_table "category_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "collaboration_styles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "communication_styles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "conflict_resolution_styles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "empathy_styles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ethnicities", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genders", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "interests", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "leadership_styles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "learning_styles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "matches", force: :cascade do |t|
    t.bigint "mentor_id", null: false
    t.bigint "mentee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mentee_id"], name: "index_matches_on_mentee_id"
    t.index ["mentor_id"], name: "index_matches_on_mentor_id"
  end

  create_table "mentees", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_mentees_on_user_id"
  end

  create_table "mentor_chatbot_messages", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_mentor_chatbot_messages_on_user_id"
  end

  create_table "mentorbot_messages", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "role"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_mentorbot_messages_on_user_id"
  end

  create_table "mentors", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_mentors_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.bigint "sender", null: false
    t.bigint "receiver", null: false
    t.string "content"
    t.boolean "is_read", default: false
    t.bigint "match_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["match_id"], name: "index_messages_on_match_id"
  end

  create_table "problem_solving_styles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "similar_category_links", force: :cascade do |t|
    t.bigint "category_1_id", null: false
    t.bigint "category_2_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_1_id"], name: "index_similar_category_links_on_category_1_id"
    t.index ["category_2_id"], name: "index_similar_category_links_on_category_2_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stress_management_styles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "time_management_styles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_careers", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "career_title_id", null: false
    t.string "company"
    t.datetime "start_date"
    t.datetime "end_date"
    t.boolean "is_current"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["career_title_id"], name: "index_user_careers_on_career_title_id"
    t.index ["user_id"], name: "index_user_careers_on_user_id"
  end

  create_table "user_ethnicities", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "ethnicity_id", null: false
    t.boolean "is_important_match_criteria", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ethnicity_id"], name: "index_user_ethnicities_on_ethnicity_id"
    t.index ["user_id"], name: "index_user_ethnicities_on_user_id"
  end

  create_table "user_genders", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "gender_id", null: false
    t.boolean "is_important_match_criteria", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["gender_id"], name: "index_user_genders_on_gender_id"
    t.index ["user_id"], name: "index_user_genders_on_user_id"
  end

  create_table "user_interests", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "interest_id", null: false
    t.boolean "is_important_match_criteria", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["interest_id"], name: "index_user_interests_on_interest_id"
    t.index ["user_id"], name: "index_user_interests_on_user_id"
  end

  create_table "user_skills", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "skill_id", null: false
    t.boolean "is_important_match_criteria", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["skill_id"], name: "index_user_skills_on_skill_id"
    t.index ["user_id"], name: "index_user_skills_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "phone"
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "suffix"
    t.string "date_of_birth"
    t.string "city"
    t.string "state"
    t.string "country"
    t.string "zip_code"
    t.string "timezone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "expertise"
  end

  create_table "work_styles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "career_titles", "career_fields"
  add_foreign_key "category_interests", "categories"
  add_foreign_key "category_interests", "interests"
  add_foreign_key "category_skills", "categories"
  add_foreign_key "category_skills", "skills"
  add_foreign_key "category_type_connections", "categories"
  add_foreign_key "category_type_connections", "category_types"
  add_foreign_key "matches", "mentees"
  add_foreign_key "matches", "mentors"
  add_foreign_key "mentees", "users"
  add_foreign_key "mentor_chatbot_messages", "users"
  add_foreign_key "mentorbot_messages", "users"
  add_foreign_key "mentors", "users"
  add_foreign_key "messages", "matches"
  add_foreign_key "similar_category_links", "categories", column: "category_1_id"
  add_foreign_key "similar_category_links", "categories", column: "category_2_id"
  add_foreign_key "user_careers", "career_titles"
  add_foreign_key "user_careers", "users"
  add_foreign_key "user_ethnicities", "ethnicities"
  add_foreign_key "user_ethnicities", "users"
  add_foreign_key "user_genders", "genders"
  add_foreign_key "user_genders", "users"
  add_foreign_key "user_interests", "interests"
  add_foreign_key "user_interests", "users"
  add_foreign_key "user_skills", "skills"
  add_foreign_key "user_skills", "users"
end
