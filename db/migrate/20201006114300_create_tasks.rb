class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.boolean :done, default: false
      t.integer :duration
      t.belongs_to :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
