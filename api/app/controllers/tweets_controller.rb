class TweetsController < ApplicationController
  before_action :set_tweet, only: [:update]

  def index
    tweets = Tweet.order(created_at: :desc)
    render json: { tweets: tweets }
  end

  def create
    @tweet = Tweet.new(content: params[:content])

    if @tweet.save
      render json: { tweet: @tweet }
    else
      render json: {}
    end
  end

  def set_tweet
    @tweet = Tweet.find(params[:id])
  end

  def update
    if @tweet.update(content: params[:content])
      render json: { tweet: @tweet }
    else
      render json: {}
    end
  end
end
