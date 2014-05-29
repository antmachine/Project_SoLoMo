class AddIdToComments < ActiveRecord::Migration
  def change
   add_column :comments, :event_id, :integer
   add_column :comments, :user_id, :integer
  end
end
