
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var playerSchema=new Schema({
    name:'String',
    debutYear:'String',
    mentor:'String',
    type:'String'
});

module.exports=mongoose.model('Player',playerSchema);