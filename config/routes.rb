Rails.application.routes.draw do
  root 'web#index'
  get '/about',   to: 'accounts#index'
  get '/contact',   to: 'accounts#index'
  get 'web/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
