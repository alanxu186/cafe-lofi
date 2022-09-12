class Post < ApplicationRecord
    belongs_to :user

    validates :title, presence: true
    validates :content, presence: true, length: {maximum: 500}
end
