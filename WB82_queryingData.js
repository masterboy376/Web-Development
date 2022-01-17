//use samkart

// this query will return all the objects as per the filters.

db.items.find({rating: 3.5})// exact 3.5

db.items.find({rating: {$gte: 3.5}})// greater than equal to 3.5

db.items.find({rating: {$gt: 3.5}})// greater than 3.5

db.items.find({rating: {$gt: 3.5}, price: {$gt: 2000}})// multiple filters with AND query filter

db.items.find({ $or:[{rating: {$gt: 3.5}}, {price:{$lt:22000}}]})// multiple filters with OR query filter

//projection query
db.items.find({rating: {$gt: 3.5}}, {rating: 1, price: 1})// this will only return desired object with only fore mentioned filters like (rating, price)



