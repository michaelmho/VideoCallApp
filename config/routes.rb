Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'

  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
    get 'register', to: 'devise/registrations#new'
    delete 'logout', to: 'sessions#destroy'
  end
end
