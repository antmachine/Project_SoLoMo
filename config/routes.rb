Rails.application.routes.draw do
  devise_for :users

  resources :pins

  resources :comments do
  	resources :comments
  end
  
	resources :posts do
    resources :comments
  end

  resources :events do
  	resources :comments
  end

  root 'events#index'

  get '/posts/delete/:id' => 'posts#destroy'

  end
# Macintosh-2:SoLoMo Flanagan$ rake routes
#                   Prefix Verb   URI Pattern                                       Controller#Action
#         new_user_session GET    /users/sign_in(.:format)                          devise/sessions#new
#             user_session POST   /users/sign_in(.:format)                          devise/sessions#create
#     destroy_user_session DELETE /users/sign_out(.:format)                         devise/sessions#destroy
#            user_password POST   /users/password(.:format)                         devise/passwords#create
#        new_user_password GET    /users/password/new(.:format)                     devise/passwords#new
#       edit_user_password GET    /users/password/edit(.:format)                    devise/passwords#edit
#                          PATCH  /users/password(.:format)                         devise/passwords#update
#                          PUT    /users/password(.:format)                         devise/passwords#update
# cancel_user_registration GET    /users/cancel(.:format)                           devise/registrations#cancel
#        user_registration POST   /users(.:format)                                  devise/registrations#create
#    new_user_registration GET    /users/sign_up(.:format)                          devise/registrations#new
#   edit_user_registration GET    /users/edit(.:format)                             devise/registrations#edit
#                          PATCH  /users(.:format)                                  devise/registrations#update
#                          PUT    /users(.:format)                                  devise/registrations#update
#                          DELETE /users(.:format)                                  devise/registrations#destroy
#                     pins GET    /pins(.:format)                                   pins#index
#                          POST   /pins(.:format)                                   pins#create
#                  new_pin GET    /pins/new(.:format)                               pins#new
#                 edit_pin GET    /pins/:id/edit(.:format)                          pins#edit
#                      pin GET    /pins/:id(.:format)                               pins#show
#                          PATCH  /pins/:id(.:format)                               pins#update
#                          PUT    /pins/:id(.:format)                               pins#update
#                          DELETE /pins/:id(.:format)                               pins#destroy
#         comment_comments GET    /comments/:comment_id/comments(.:format)          comments#index
#                          POST   /comments/:comment_id/comments(.:format)          comments#create
#      new_comment_comment GET    /comments/:comment_id/comments/new(.:format)      comments#new
#     edit_comment_comment GET    /comments/:comment_id/comments/:id/edit(.:format) comments#edit
#          comment_comment GET    /comments/:comment_id/comments/:id(.:format)      comments#show
#                          PATCH  /comments/:comment_id/comments/:id(.:format)      comments#update
#                          PUT    /comments/:comment_id/comments/:id(.:format)      comments#update
#                          DELETE /comments/:comment_id/comments/:id(.:format)      comments#destroy
#                 comments GET    /comments(.:format)                               comments#index
#                          POST   /comments(.:format)                               comments#create
#              new_comment GET    /comments/new(.:format)                           comments#new
#             edit_comment GET    /comments/:id/edit(.:format)                      comments#edit
#                  comment GET    /comments/:id(.:format)                           comments#show
#                          PATCH  /comments/:id(.:format)                           comments#update
#                          PUT    /comments/:id(.:format)                           comments#update
#                          DELETE /comments/:id(.:format)                           comments#destroy
#            post_comments GET    /posts/:post_id/comments(.:format)                comments#index
#                          POST   /posts/:post_id/comments(.:format)                comments#create
#         new_post_comment GET    /posts/:post_id/comments/new(.:format)            comments#new
#        edit_post_comment GET    /posts/:post_id/comments/:id/edit(.:format)       comments#edit
#             post_comment GET    /posts/:post_id/comments/:id(.:format)            comments#show
#                          PATCH  /posts/:post_id/comments/:id(.:format)            comments#update
#                          PUT    /posts/:post_id/comments/:id(.:format)            comments#update
#                          DELETE /posts/:post_id/comments/:id(.:format)            comments#destroy
#                    posts GET    /posts(.:format)                                  posts#index
#                          POST   /posts(.:format)                                  posts#create
#                 new_post GET    /posts/new(.:format)                              posts#new
#                edit_post GET    /posts/:id/edit(.:format)                         posts#edit
#                     post GET    /posts/:id(.:format)                              posts#show
#                          PATCH  /posts/:id(.:format)                              posts#update
#                          PUT    /posts/:id(.:format)                              posts#update
#                          DELETE /posts/:id(.:format)                              posts#destroy
#           event_comments GET    /events/:event_id/comments(.:format)              comments#index
#                          POST   /events/:event_id/comments(.:format)              comments#create
#        new_event_comment GET    /events/:event_id/comments/new(.:format)          comments#new
#       edit_event_comment GET    /events/:event_id/comments/:id/edit(.:format)     comments#edit
#            event_comment GET    /events/:event_id/comments/:id(.:format)          comments#show
#                          PATCH  /events/:event_id/comments/:id(.:format)          comments#update
#                          PUT    /events/:event_id/comments/:id(.:format)          comments#update
#                          DELETE /events/:event_id/comments/:id(.:format)          comments#destroy
#                   events GET    /events(.:format)                                 events#index
#                          POST   /events(.:format)                                 events#create
#                new_event GET    /events/new(.:format)                             events#new
#               edit_event GET    /events/:id/edit(.:format)                        events#edit
#                    event GET    /events/:id(.:format)                             events#show
#                          PATCH  /events/:id(.:format)                             events#update
#                          PUT    /events/:id(.:format)                             events#update
#                          DELETE /events/:id(.:format)                             events#destroy
#                     root GET    /                                                 comments#index
#                          GET    /posts/delete/:id(.:format)                       posts#destroy


