class TweetsController < ApplicationController
  def index
    tweets = Tweet.order(created_at: :desc)
    render json: { tweets: tweets }
  end
end
