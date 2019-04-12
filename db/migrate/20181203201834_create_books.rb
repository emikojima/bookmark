class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.integer :user_id
      t.string :title
      t.string :description
      t.string :author
      t.string :isbns
      t.string :notes


      t.timestamps
    end
  end
end
