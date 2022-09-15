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

p1 = Post.create!(title: "my first post",  content: "hello everyone this is my first post", image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfRPu51-vyDzAUtBHdkqVj-jGWPDn1cNWuA&usqp=CAU", likes: 5, dislikes: 2, user_id: u1.id)
p1 = Post.create!(title: "my second post", content: "hello everyone this is my second post", image_url:"https://wallpapercave.com/wp/wp4649556.jpg",likes: 2, dislikes: 1, user_id: u1.id)
p1 = Post.create!(title: "my first post", content: "hello everyone this is my first post", image_url:"https://i.pinimg.com/originals/77/42/c8/7742c8552e91c4d2f99bfee0019a7c2e.jpg", likes: 7, dislikes: 0, user_id: u2.id)
p1 = Post.create!(title: "my second post", content: "hello everyone this is my second post", image_url:"https://cdn.britannica.com/96/1296-050-4A65097D/gelding-bay-coat.jpg", likes: 8, dislikes: 0, user_id: u2.id)
p1 = Post.create!(title: "my first post", content: "hello everyone this is my first post", image_url:"https://i.pinimg.com/originals/be/bf/7e/bebf7efd085d9e208aaf1c4f6c47cc42.png", likes: 1, dislikes: 5, user_id: u3.id)
p1 = Post.create!(title: "my second post", content: "hello everyone this is my second post", image_url:"https://s2.glbimg.com/rD4YimVVApk_Tsz_4ND0KziVncg=/0x0:1366x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/n/H/j8dvhPSuuiCQqjFnhfAQ/lofi4.jpg", likes: 2, dislikes: 9, user_id: u3.id)
p1 = Post.create!(title: "my first post", content: "hello everyone this is my first post", image_url:"https://img.freepik.com/free-vector/cute-shiba-inu-dog-running-cartoon-icon-illustration_138676-2418.jpg?w=2000", likes: 10, dislikes: 5, user_id: u4.id)
p1 = Post.create!(title: "my second post", content: "hello everyone this is my second post", image_url:"https://financefeeds.com/wp-content/uploads/2021/12/Shiba-Inu.jpg", likes: 20, dislikes: 0, user_id: u4.id)

puts "Done seeding!"