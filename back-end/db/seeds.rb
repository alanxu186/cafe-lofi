# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "destroying old seed data"
User.destroy_all
Post.destroy_all

puts "Making new seed data"

u1 = User.create!(name: "Alan", email: "alanxu@gmail.com", bio: "Hello all it is I, Alan", location:"Staten Island" , password: "123456")
u2 = User.create!(name: "Alex", email: "alex123@gmail.com", bio:"I like programming", location:"Brooklyn", password: "123456")
u3 = User.create!(name: "Ken", email: "kenu@gmail.com", bio:"I love anime", location:"Japan" ,password: "123456")
u4 = User.create!(name: "Marguerite", email: "marguerite@gmail.com", bio:"I like sushi", location:"Queens", password: "123456")

p1 = Post.create!(title: "my first post", content: "hello everyone this is my first post", likes: 5, dislikes: 2, user_id: u1.id)
p1 = Post.create!(title: "my second post", content: "hello everyone this is my second post", likes: 2, dislikes: 1, user_id: u1.id)
p1 = Post.create!(title: "my first post", content: "hello everyone this is my first post", likes: 7, dislikes: 0, user_id: u2.id)
p1 = Post.create!(title: "my second post", content: "hello everyone this is my second post", likes: 8, dislikes: 0, user_id: u2.id)
p1 = Post.create!(title: "my first post", content: "hello everyone this is my first post", likes: 1, dislikes: 5, user_id: u3.id)
p1 = Post.create!(title: "my second post", content: "hello everyone this is my second post", likes: 2, dislikes: 9, user_id: u3.id)
p1 = Post.create!(title: "my first post", content: "hello everyone this is my first post", likes: 10, dislikes: 5, user_id: u4.id)
p1 = Post.create!(title: "my second post", content: "hello everyone this is my second post", likes: 20, dislikes: 0, user_id: u4.id)

puts "Done seeding!"