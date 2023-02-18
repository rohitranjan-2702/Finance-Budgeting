const mongoose=require('mongoose');
const Schema=mongoose.Schema


const expenses=new Schema({
    date:{
        type:Date,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    tag:{
        type:String,
        required:true
    }

})
const expensesSchema=new Schema({
    year:{
        // type:Number,
        type:Number,
        required:true,
        min:4,
        max:4
    },
    month:{
        type:String,
        required:true,
        min:3,
        max:12
    },
    expenses:[expenses]

})
module.exports=mongoose.model('expensesamount',expensesSchema);