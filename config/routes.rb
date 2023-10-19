Rails.application.routes.draw do
  resources :user_careers
  resources :career_titles
  resources :career_fields
  resources :category_skills
  resources :category_interests
  resources :user_interests
  resources :user_skills
  resources :interests
  resources :skills
  resources :categories
  resources :match_games
  resources :user_races
  resources :user_genders
  resources :sessions
  resources :races
  resources :genders
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#destroy'
  get '/me', to: 'sessions#show'
  
end
