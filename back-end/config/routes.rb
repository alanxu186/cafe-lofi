Rails.application.routes.draw do
  resources :posts 
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/login", to: "users#login"
  get "/profile", to: "users#profile"
  get "/my_posts", to: "posts#my_posts"
  patch "/user_image/:id", to: "users#update_image"
end
