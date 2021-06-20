class HomeController < ApplicationController
  def index
    # get all users that are not current signed in user
    @users = User.where.not(id: current_user.id) if user_signed_in?
  end
end
