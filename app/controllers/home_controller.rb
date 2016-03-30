class HomeController < ApplicationController
  def index
    if params[:search]
      p ENV['GOOGLE_PLACES_API_KEY']
      @client = GooglePlaces::Client.new(ENV['GOOGLE_PLACES_API_KEY'])
      @results = @client.predictions_by_input(params[:search], types: [:geocode])
    end
  end
end
