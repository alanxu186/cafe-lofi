class UserSerializer < ActiveModel::Serializer
  attributes :name, :email, :bio, :location

  has_many :posts
end
