class Event < ActiveRecord::Base
  geocoded_by :address
  after_validation :geocode

  # This Paperclip method associates the attribute ":image" with a file attachment
  has_attached_file :image, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }

  # Paperclip method to validate the attached images as image/jpg, image/png, etc
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  # Create ActiveRecord methods to facilitate data retrieval:
  belongs_to :user

  # validates_attacent_presence :image
  # validates_attachment_size :image, :less_than => 5.megatbytes
  # validates_attachment_type :image, :content_type => ['image/jpeg', 'image/png', 'image/jpg']
end

