console.log('export');
function design(a){
    for(var i=1; i<=a; i++){
        console.log("* ".repeat(i));
     }
}
module.exports  ={
    mod : design,
    value : 10,
}
// design(4):