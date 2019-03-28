# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.create([{title: 'Under the Mango Tree', description: "A young woman’s well-ordered life is disrupted by the I.T. guy from her office.", author: 'Lia Mishicma', user_id: 1}, {title: 'Now', author: 'Michiko Kakutani', user_id: 1}])

User.create(username: 'emi', password_digest: 'emi')
