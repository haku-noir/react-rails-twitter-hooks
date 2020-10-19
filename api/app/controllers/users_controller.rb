class UsersController < ApplicationController
  before_action :set_user, only: [:update]

  def index
    users = User.order(created_at: :desc)
    render json: { users: users }
  end

  def set_user
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(
      name: params[:name],
      password: params[:password],
      image_name: "default_user.jpg",
    )
    if @user.save
      session[:user_id] = @user.id
      render json: { user: @user }
    else
      render json: {}
    end
  end

  def update
    if params[:name]
      @user.name = params[:name]
    end
    if params[:password]
      @user.password = params[:password]
    end

    if params[:image]
      @user.image_name = "#{@user.id}.jpg"
      image = params[:image]
      File.binwrite("public/user_images/#{@user.image_name}", image.read)
    end

    if @user.save
      render json: { data: @user }
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

  def tweets
    @user = User.find(params[:id].to_i)
    if !@user
      render json: { tweet_ids: [] }
    end

    @tweet_ids = @user.tweets
    if @tweet_ids
      render json: { tweet_ids: @tweet_ids }
    else
      render json: { tweet_ids: [] }
    end
  end
end
