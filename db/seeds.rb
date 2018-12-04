# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
List.create([{name: 'Sad Fiction', user_id: 1}, {name:'Sci-Fi'}, {name: 'POC Women Writers'}])

Book.create([{title: 'Under the Mango Tree', description: "A young woman’s well-ordered life is disrupted by the I.T. guy from her office.", author: 'Lia Mishicma'}, {title: 'Now, a GET request to photos would succeed, but a POST request to photos which would ordinarily be routed to the create action will fail.', author: 'Michiko Kakutani'}])

User.create(username: 'emi', password: 'emi')
