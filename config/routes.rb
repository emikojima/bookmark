Rails.application.routes.draw do

  get '/api/v1/fiction', to: 'get_books#fiction'
  get '/api/v1/nonfiction', to: 'get_books#nonfiction'
  get '/api/v1/science', to: 'get_books#science'
  namespace :api do
    namespace :v1 do
      resources :users do
        resources:books
      end
      post 'login', action: :login, controller: 'users'
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
