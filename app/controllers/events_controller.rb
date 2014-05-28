class EventsController < ApplicationController
	# before_filter :signed_in_user, only: [:index, :create, :new, :edit, :update, :destroy, :search]
 #  before_filter :check_event_owner, only: [:edit, :update, :destroy]

  def index
    # @events = current_user.event.all
    @events = Event.all

    respond_to do |format|
      format.json { render :json => @events }
    end
  end

  def new
    @event = Event.new
  end

  def create
    # event = current_user.events.create event_params
    @event = Event.new(event_params)

    respond_to do |format|
      if @event.save
        format.html { redirect_to(@event, :notice => 'event was successfully created.') }
        format.json { render :json => @event, :status => :created } #:location => @event }
        format.xml  { render :xml => @event, :status => :created }  #:location => @event }
      else
        format.html { render :action => "new" }
        format.json { render :json => @event.errors, :status => :unprocessable_entity }
        format.xml  { render :xml => @event.errors, :status => :unprocessable_entity }
      end
    end
    # redirect_to(event)
  end

  def show
    # @event = current_user.events.find(params[:id])
    @event = Event.find(params[:id])
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
      params.require(:event).permit(:address)
    end

end
