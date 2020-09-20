class ApplicationController < ActionController::API
  before_action :set_current_user

  def set_current_user
    @current_user = User.select(:id, :name).find_by(id: session[:user_id])
  end

end
