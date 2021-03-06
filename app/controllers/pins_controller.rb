class PinsController < ApplicationController
	# before_action :authenticate_user!   add this on eventually root page

	def index
		@pins = Pin.all

		respond_to do |format|
			format.json { render :json => @pins }
		end
	end


	def new
	end


	def create
		@pin = Pin.new(pins_params)

		respond_to do |format|
			if @pin.save
				format.json { render json: @pin, status: :created }
			else
				format.json { render json: @pin.errors, status: :unprocessable_entity }
			end
		end
		

	end

	private
	def pins_params
		params.require(:pin).permit(:latitude, :longitude)
	end

	
end
