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

ActiveRecord::Schema[7.0].define(version: 2023_10_19_073137) do
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

  create_table "races", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "skills", force: :cascade do |t|
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

  create_table "user_races", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "race_id", null: false
    t.boolean "is_important_match_criteria", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["race_id"], name: "index_user_races_on_race_id"
    t.index ["user_id"], name: "index_user_races_on_user_id"
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
  end

  add_foreign_key "career_titles", "career_fields"
  add_foreign_key "category_interests", "categories"
  add_foreign_key "category_interests", "interests"
  add_foreign_key "category_skills", "categories"
  add_foreign_key "category_skills", "skills"
  add_foreign_key "user_careers", "career_titles"
  add_foreign_key "user_careers", "users"
  add_foreign_key "user_genders", "genders"
  add_foreign_key "user_genders", "users"
  add_foreign_key "user_interests", "interests"
  add_foreign_key "user_interests", "users"
  add_foreign_key "user_races", "races"
  add_foreign_key "user_races", "users"
  add_foreign_key "user_skills", "skills"
  add_foreign_key "user_skills", "users"
end
