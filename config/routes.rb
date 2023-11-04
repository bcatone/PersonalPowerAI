Rails.application.routes.draw do
  resources :stress_management_styles
  resources :time_management_styles
  resources :conflict_resolution_styles
  resources :leadership_styles
  resources :learning_styles
  resources :problem_solving_styles
  resources :collaboration_styles
  resources :work_styles
  resources :empathy_styles
  resources :communication_styles
  resources :create_stress_management_styles
  resources :create_time_management_styles
  resources :create_conflict_resolution_styles
  resources :create_leadership_styles
  resources :create_learning_styles
  resources :create_problem_solving_styles
  resources :create_collaboration_styles
  resources :create_work_styles
  resources :create_empathy_styles
  resources :create_communication_styles
  resources :messages
  resources :mentorbot_messages
  resources :matches
  resources :mentees
  resources :mentors
  resources :user_interests
  resources :user_skills
  resources :category_skills
  resources :skills
  resources :category_interests
  resources :interests
  resources :categories
  resources :user_races
  resources :user_genders
  resources :races
  resources :genders
  resources :users

  post '/register', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#destroy'
  get '/me', to: 'sessions#show'

  get '/match-prompt-data', to: 'ai#match_prompt_data'
  get '/mentorbot-prompt-data', to: 'ai#chat_prompt_data'
end
