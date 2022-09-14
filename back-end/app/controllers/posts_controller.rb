class PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]

  # GET /posts
  def index
    @posts = Post.all.order(created_at: :desc)

    render json: @posts 
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    token = request.headers["jwt"]
    user_id = decode_token(token)
    @post = Post.create!(title: params[:title],content: params[:content],user_id: user_id)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def my_posts
    token = request.headers["jwt"]
    user_id = decode_token(token)
    posts = Post.where(user_id: user_id)
    render json: posts.order(created_at: :desc)
  end

  # PATCH/PUT /posts/1
  def update
    token = request.headers["jwt"]
    user_id = decode_token(token)
    post = Post.find(params[:id])
    post.update(post_params) if post.user_id == user_id
    render json: post
  end

  # DELETE /posts/1
  def destroy
    # decode the token -> user_id
    # check if the user_id is the same as the one you are trying to delete 
    # delete if so

    # token = request.headers["jwt"]
    # user_id = decode_token(token)
    # SUDO CODE NOT SURE IF IT WOULD WORK IF PASTED
    # Post.find(id).user_id == user_id
    token = request.headers["jwt"]
    user_id = decode_token(token)
    post = Post.find(params[:id])
    post.destroy if post.user_id == user_id
    render json: {message: "post has been deleted!"}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end
    
    def decode_token(token)
      JWT.decode(token,"123")[0]["user_id"]
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :content, :likes, :dislikes, :user_id)
    end
end
