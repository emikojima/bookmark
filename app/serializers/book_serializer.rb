class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :author, :isbns, :notes

  belongs_to :user
end
