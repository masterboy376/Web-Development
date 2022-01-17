// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost/samkart');
}
const db = mongoose.connection;
db.on('error', function () {
    console.error('not connected');
})
db.once('open', function () {
    console.log('connected');
})
//-------------------------------------------------------------------------------------------------------------------
// shemma
const kittySchema = new mongoose.Schema({
    name: String
});
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    var greeting ="Meow name is " + this.name;
    console.log(greeting);
};
// modeling
const Kitten = mongoose.model('allSamKitty', kittySchema);//collection of name allsamkitties will be created in db samkart, where the document samKitty will be saved
//object
const samKitty = new Kitten({ name: 'sam ka kitty 2' });
// console.log(samKitty.name);
// samKitty.speak();
//---------------------------------------------------------------------------------------------------------------------
//saving document
//samKitty.save();
//samKitty.speak();
// finding
Kitten.find( function(err, kittens){
    if (err) return console.error(err);
    console.log(kittens);
})
