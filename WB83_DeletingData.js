// use samkart

// you can find the items to delete just like querying the items

db.items.deleteOne({name: "samsung 30s"})// will delete the first item with the name "samsung 30s"

db.items.deleteMany({name: "samsung 30s"})// will delete all the item with the name "samsung 30s"
