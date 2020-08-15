class UsersController < ApplicationController

  def index
    users = User.order(created_at: :desc)
    render json: { users: users }
  end

  def login
    @user = User.find_by(name: params[:name], password: params[:password])

    if @user
      render json: { user: @user }
    else
      render json: {}
    end
  end

end
