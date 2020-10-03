Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  authenticated :user do
    root 'pages#index', as: :authenticated_root
  end
  root 'pages#home'

  namespace :api do
    namespace :v1 do
      resources :lists, param: :slug, only: [:index, :show, :update, :destroy]
      resources :tasks, param: :slug, only: [:show, :create, :update, :destroy]
  end
end

  get '*path', to: 'pages#lists', via: :all
  get '/lists' => 'pages#lists', as: :user_root
end
