class AddDetailsToProducts < ActiveRecord::Migration[7.2]
  def change
    add_column :products, :title, :string
    add_column :products, :description, :text
    add_column :products, :price, :decimal
    add_column :products, :images, :string
  end
end
