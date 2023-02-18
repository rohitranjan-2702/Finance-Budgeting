const mongoose=require('mongoose');

const URL='mongodb+srv://fottyseven:finance1234@cluster0.5h4samw.mongodb.net/?retryWrites=true&w=majority'

const connect=mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

connect.then((db)=>{
    console.log('mongodb is connected succesfully to the server')
},(err)=>{
    console.log(err);
})