class WebController < ApplicationController
  def index
    gon.gurunavi_key = ENV['GURUNAVI_KEY']
    gon.google_map_key = ENV['GOOGLE_MAP_KEY']
  end
end
