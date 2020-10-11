class User < ApplicationRecord
  def tweets
    tweets = Tweet.where(user_id: self.id).order(created_at: :desc)
    tweet_ids = []

    tweets.each do |tweet|
      tweet_ids << tweet.id
    end

    return tweet_ids
  end

end
