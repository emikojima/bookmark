class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :lists
  has_many :books, through: :lists
end
