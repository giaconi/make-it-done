class List < ApplicationRecord
  
  belongs_to :user
  has_many :tasks, dependent: :destroy

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end
  
end
