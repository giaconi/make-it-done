class List < ApplicationRecord
  
  belongs_to :user
  has_many :tasks, dependent: :destroy

  validates :title, uniqueness: true
  validates :title, presence: true

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end
  
end
