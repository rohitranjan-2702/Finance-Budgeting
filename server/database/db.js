const mongoose=require('mongoose');

const URL='mongodb://localhost:27017/finance'

const connect=()=>{
    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then((db)=>{
        console.log('mongodb is connected succesfully to the server')
    },(err)=>{
        console.log(err);
    })
} 

module.exports = connect