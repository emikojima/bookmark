Rails.application.routes.draw do

  get '/api/v1/books', to: 'get_books#books'
  namespace :api do
    namespace :v1 do

      resources :lists do
        resources :books
      end
      resources :users
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
