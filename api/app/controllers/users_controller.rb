class UsersController < ApplicationController

  def index
    users = User.order(created_at: :desc)
    render json: { users: users }
  end

  def create
    @user = User.new(
      name: params[:name],
      password: params[:password],
    )
    if @user.save
      session[:user_id] = @user.id
      render json: { user: @user }
    else
      render json: {}
    end
  end

  def login
    @user = User.find_by(name: params[:name], password: params[:password])

    if @user
      session[:user_id] = @user.id
      render json: { user: @user }
    else
      render json: {}
    end
  end

  def logout
    session[:user_id] = nil
  end

  def session_user
    if @current_user
      render json: { user: @current_user }
    else
      render json: {}
    end
  end

end
