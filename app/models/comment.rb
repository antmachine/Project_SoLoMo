class Comment < ActiveRecord::Base
	# belongs_to :post
	belongs_to :commentable, :polymorphic => true
  has_many :comments, :as => :commentable
end
