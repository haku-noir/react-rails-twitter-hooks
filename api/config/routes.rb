Rails.application.routes.draw do
  get "users/:id/tweets" => "users#tweets"
  get "session" => "users#session_user"
  post "logout" => "users#logout"
  post "login" => "users#login"
  resources :users, only: [:index, :create]
  resources :tweets, only: [:index, :create, :update, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
