class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.boolean :done, default: false
      t.string :description
      t.datetime :duration
      t.datetime :date_added

      t.references :user, null: false, foreign_key: true
      t.references :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
