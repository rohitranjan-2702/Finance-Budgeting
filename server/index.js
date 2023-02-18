const express=require('express');
const cors=require('cors');
const connection=require('./database/db');
const user=require('./Schema/signSchema')

const port=6000;

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.send("hello!!!!");
})

app.post('/signin',async(req,res)=>{

    try{
        const exists=await user.findOne({username:req.body.username})
        if(exists){
            return res.status(401).json({message:"username is already exists"})
        }

        const detail=req.body
        const user1=new user(detail);
        await user1.save();
        res.status(200).json({message:user1.toJSON()})

    }catch(error){
        res.status(500).json('error',error.message);
    }
})

connection;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})