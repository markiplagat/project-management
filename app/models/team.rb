class Team < ApplicationRecord
  has_many :projects, dependent: :destroy
  belongs_to :users

  accepts_nested_attributes_for :users, allow_destroy: true
end
