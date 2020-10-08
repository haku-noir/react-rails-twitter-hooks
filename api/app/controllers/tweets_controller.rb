class TweetsController < ApplicationController
  before_action :set_tweet, only: [:update, :destroy]

  def index
    tweets = Tweet.order(created_at: :desc)
    @tweets = []

    tweets.each do |tweet|
      @tweets << set_tweet_hash(tweet)
    end

    render json: { tweets: @tweets }
  end

  def set_tweet
    tweet = Tweet.find(params[:id])
    @tweet = set_tweet_hash(tweet)
  end

  def set_tweet_hash(tweet)
    tweet_hash = tweet.attributes
    tweet_hash.store(:time, tweet.time)

    return tweet_hash
  end

  def create
    @tweet = Tweet.new(
      content: params[:content],
      user_id: @current_user.id
    )

    if @tweet.save
      render json: { tweet: @tweet }
    else
      render json: {}
    end
  end

  def update
    if @tweet.update(content: params[:content])
      render json: { tweet: @tweet }
    else
      render json: {}
    end
  end

  def destroy
    @tweet.destroy
    render json: {}
  end
end
