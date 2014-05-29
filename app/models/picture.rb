class Picture < ActiveRecord::Base

  # This method associates the attribute ":image" with a file attachment
  has_attached_file :image, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  # Create ActiveRecord methods to facilitate data retrieval:
  belongs_to :user
  belongs_to :event

end
