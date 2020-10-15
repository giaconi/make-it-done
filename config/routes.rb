
Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  authenticated :user do
    root 'pages#lists', as: :authenticated_root
  end
  root 'pages#home'

  namespace :api do
    namespace :v1 do
      resources :lists, param: :slug, only: [:index, :show, :update, :create, :destroy]
      resources :tasks, only: [:show, :create, :update]
    end
end

  get '/lists' => 'pages#lists', as: :user_root

  # edit this route to allow page refresh and send to 404 or 500 in other cases
  get '*path', to: 'pages#lists', via: :all
end