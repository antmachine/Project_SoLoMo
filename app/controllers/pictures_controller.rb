class PicturesController < ApplicationController

  def index
  	@event = Event.find(params[:event_id])
  	@pictures = @event.pictures.all
  end

  def new
  	@event = Event.find(params[:event_id])
  	@picture = @event.pictures.find(params[:id])
  end

  def create
  	@event = Event.find(params(:event_id))
  	@picture = @event.pictures.new(picture_params)
  end
  
  private
  def picture_params
  	params.require(:picture).permit(:name)
  end

end
