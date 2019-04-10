module Api::V1
class UsersController < ApplicationController


  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    
      @user = User.new(username: params[:user][:username], password: params[:user][:password])

      if @user.save
        jwt = Auth.encrypt({ user_id: @user.id })
        render json: { jwt: jwt, user: @user }
      else
        render json: @user.errors, status: :unprocessable_entity
      end
  end

  #POST /login
  def login
    @user = User.find_by(username: params[:user][:username])

    if @user && @user.authenticate(params[:user][:password])
      jwt = Auth.encrypt({ user_id: @user.id })
      render json: { jwt: jwt, user: @user }

    else
      render json: @user.errors, status: 400
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
end
