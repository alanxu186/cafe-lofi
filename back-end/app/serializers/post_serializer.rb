class PostSerializer < ActiveModel::Serializer
  belongs_to :user
  attributes :id, :user, :content, :image_url, :likes, :dislikes, :created_at, :post_image

  def post_image
    if object.image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.image, host: "local")
    end
  end
end
