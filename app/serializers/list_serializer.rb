class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :title, :slug
  has_many :tasks
end
