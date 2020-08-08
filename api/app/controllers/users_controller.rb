class UsersController < ApplicationController

  def index
    users = User.order(created_at: :desc)
    render json: { users: users }
  end
end
