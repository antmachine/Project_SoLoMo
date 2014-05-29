# config/initializers/paperclip.rb 
# This file is required to configure Paperclip to use Amazon s3 for image storage.
Paperclip::Attachment.default_options[:url] = 's3-us-west-1.amazonaws.com'
Paperclip::Attachment.default_options[:path] = '/:class/:attachment/:id_partition/:style/:filename'

Paperclip::Attachment.default_options[:s3_host_name] = 's3-us-west-1.amazonaws.com'