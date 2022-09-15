class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bio, :location, :avatar_url

  has_many :posts

  def avatar_url
    if object.avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.avatar, host: "local")
    end
  end
end
