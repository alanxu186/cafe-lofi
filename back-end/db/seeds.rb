# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Making seed data"

u1 = User.create!(name: "Alan", email: "alanxu@gmail.com", password: "123456")
u2 = User.create!(name: "Alex", email: "alex123@gmail.com", password: "123456")
u3 = User.create!(name: "Ken", email: "kenu@gmail.com", password: "123456")
u4 = User.create!(name: "Marguerite", email: "marguerite@gmail.com", password: "123456")

p1 = Post.create!(title: "my first post", content: "hello everyone this is my first post", likes: 5, dislikes: 2, user: u1)
p1 = Post.create!(title: "my second post", content: "hello everyone this is my second post", likes: 2, dislikes: 1, user: u1)
p1 = Post.create!(title: "my first post", content: "hello everyone this is my first post", likes: 7, dislikes: 0, user: u2)
p1 = Post.create!(title: "my second post", content: "hello everyone this is my second post", likes: 8, dislikes: 0, user: u2)
p1 = Post.create!(title: "my first post", content: "hello everyone this is my first post", likes: 1, dislikes: 5, user: u3)
p1 = Post.create!(title: "my second post", content: "hello everyone this is my second post", likes: 2, dislikes: 9, user: u3)
p1 = Post.create!(title: "my first post", content: "hello everyone this is my first post", likes: 10, dislikes: 5, user: u4)
p1 = Post.create!(title: "my second post", content: "hello everyone this is my second post", likes: 20, dislikes: 0, user: u4)

puts "Done seeding!"