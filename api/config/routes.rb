Rails.application.routes.draw do
  post "logout" => "users#logout"
  post "login" => "users#login"
  resources :users, only: [:index]
  resources :tweets, only: [:index, :create, :update, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
