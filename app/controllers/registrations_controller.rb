class RegistrationsController < Devise::RegistrationsController
  # whitelisting new attributes

  private

  def sign_up_params
    params.require(:user).permit(:name, :email, :avatar, :github_link, :password)
  end

  def account_update_params
    params.require(:user).permit(:name, :email, :github_link, :avatar, :password)
  end
end
