const User = require("../models/userSchema");
// @desc : get all expenses of particular month of signed-in user
// @route: GET /expense/monthly
// @access: private
const expenses=require('../models/expensesSchema');

const addExpense = async (req, res) => {
  try{
    const user1=req.body;
    // console.log(user1);
    const newUser=new expenses(user1);
    await newUser.save();
    await newUser.expenses.push(req.body)
    res.status(200).json({message:newUser.toJSON()})
    console.log(newUser);
  }catch(error){
    res.status(500).json({message:error.message})
  }
};

const test = async (req, res) => {
  try{
    const user = await User.create(req.body);
    // res.status(200).json({user: user._id});
    console.log(user);
  }
  catch(err){
    console.log(err);
  }
  
}

// @desc : add new expense of particular month of signed-in user
// @route: POST /expense/new
// @access: private
const getExpenses = async (req, res) => {
  // console.log("TODO: add 1 expense of particular month of signed-in user");
  // res.send("TODO: add 1 expense of particular month of signed-in user");or){
  try{

  }catch(error){
    res.status(500).json({message:err.message})
  }
};

module.exports = {
  getExpenses,
  addExpense,
  test
};
