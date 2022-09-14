class PostSerializer < ActiveModel::Serializer
  belongs_to :user
  attributes :id, :user, :content, :likes, :dislikes, :created_at
end
