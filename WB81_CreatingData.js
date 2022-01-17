// inserting date in mongo db

// use samkart

db.items.insertOne({name:"samsung 30s", price: 22000, rating:4.5, qty: 233, sold:98})

db.items.insertMany([{name:"realme 30", price: 20456, rating:2.5, qty: 33, sold:908}, {name:"1phone 13", price: 220000, rating:0.5, qty: 233000, sold:00}, {name:"moto 4t", price: 20000, rating:4.0, qty: 233, sold:98}])

db.items.insertOne({name:"samsung 30s", price: 22000, rating:4.5, qty: 233, sold:98, isBig: true})
