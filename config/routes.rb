Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  authenticated :user do
    root 'pages#home', as: :authenticated_root
  end
  root 'pages#home'

  namespace :api do
    namespace :v1 do
      resources :lists, param: :slug, only: [:index, :show, :update, :create, :destroy]
      resources :tasks, only: [:show, :create, :update]
    end
end

  get '*path', to: 'pages#lists', via: :all
  get '/lists' => 'pages#lists', as: :user_root
end
