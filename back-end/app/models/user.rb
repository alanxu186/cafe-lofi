class User < ApplicationRecord
    has_many :posts

    has_secure_password

    validates :name, presence: true
    validates :email, presence: true
    validates :password, length: {in: 6..20}
end
