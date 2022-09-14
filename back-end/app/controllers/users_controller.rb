class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @users = User.all

    render json: @users,  except: [:password_digest]
  end

  # GET /users/1
  def show
    render json: @user , except: [:password_digest], methods: [:posts]
  end

  # POST /users
  def create
    user = User.create!(user_params)

    if user
      token = generate_token user.id
      render json: {token: token, user: user}
    else
      render json: {error:"401 unauthorized"}
    end
  end

  # PATCH/PUT /users/1
  def update
    token = request.headers["jwt"]
    user_id = decode_token(token)
    if @user
      @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    
    @user.destroy
  end

  def login
    user = User.find_by(email: params[:email]).try(:authenticate, params[:password])
    if user 
      token = generate_token user.id
      render json: {token:token, user: user}
    else
      render json: {error:"401 unauthorized"}
    end
  end

  def profile 
    token = request.headers["jwt"]
    user_id = decode_token(token)
    if user_id
      render json: User.find(user_id), except: [:password_digest], methods: [:posts]
    else
      render json: {error: "401 unauthorized"}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end
    def decode_token(token)
      JWT.decode(token,"123")[0]["user_id"]
    end

    def generate_token(user_id)
      JWT.encode({user_id:user_id}, "123")
    end
    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:name, :email, :password, :bio, :location)
    end
end
