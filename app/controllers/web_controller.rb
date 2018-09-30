class WebController < ApplicationController
  def index
    gon.gurunavi_key = ENV['GURUNAVI_KEY']
  end
end
