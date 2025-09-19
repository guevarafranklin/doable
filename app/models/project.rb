class Project < ApplicationRecord
  has_many :todos, dependent: :destroy
  validates :name, presence: { message: "did you forget to name your project?" }, length: { maximum: 255 }
end
