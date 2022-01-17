// use samkart

// updating data
// CRUD -> Create Read Update Delete

db.anotherCollection.insertOne({a:1})
db.anotherCollection.updateOne({a:1},{$set: {a:10}})
db.anotherCollection.updateOne({a:1},{$set: {b:10}})
db.anotherCollection.updateMany({a:10}, {$set: {c:100}})
