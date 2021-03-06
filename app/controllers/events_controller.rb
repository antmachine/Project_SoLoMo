class EventsController < ApplicationController
	# before_filter :signed_in_user, only: [:index, :create, :new, :edit, :update, :destroy, :search]
 #  before_filter :check_event_owner, only: [:edit, :update, :destroy]
 
  skip_before_filter :verify_authenticity_token, only: [:search]

  def index
    @events = Event.all
    event_hash = @events.map do |event|
    event_hash = event.attributes
      # event_hash["image_url"] = event.pictures.first.try(:image).try(:url)
      
      event_hash["image_urls"] = event.pictures.map do |x| 
        x.try(:image).try(:url)
      end

      event_hash
    end
    respond_to do |format|
      format.html 
      format.json { render :json => event_hash }
    end
  end

  def new
    @event = Event.new
    5.times {@event.pictures.build}
  end

  def create
    # event = current_user.events.create event_params
    @event = Event.new(event_params)

    respond_to do |format|
      if @event.save
        format.html { redirect_to "/", :notice => 'event was successfully created.' }
        format.json { render :json => @event, :status => :created } 
        format.xml  { render :xml => @event, :status => :created }  
        # redirect_to events_path
      else
        format.html { render :action => "new" }
        format.json { render :json => @event.errors, :status => :unprocessable_entity }
        format.xml  { render :xml => @event.errors, :status => :unprocessable_entity }
      end
    # redirect_to events_path
    end
  end

  def search
    @search = SimpleSearch.new SimpleSearch.get_params(params)
    if @search.valid?
      @tracks = @search.search_within Events.all, :description
    end
  end

  def show
    # @event = current_user.events.find(params[:id])
    # @event = Event.find(params[:id])
  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    event = Event.find(params[:id])
    event.update_attributes event_params
    redirect_to(event)
  end

  def destroy
    event = Event.find(params[:id])
    event.delete
    redirect_to(events_path)
  end

  private
    def event_params
      params.require(:event).permit(:type, :user_id, :date, :time, :duration, :address, :latitude, :longitude, :cash_only, :image, :description, :search_radius, :pictures_attributes=>[:image] )
    end

end

