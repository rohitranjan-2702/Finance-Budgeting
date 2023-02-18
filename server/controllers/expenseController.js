const User = require("../models/userSchema");
// @desc : get all expenses of particular month of signed-in user
// @route: GET /expense/monthly
// @access: private
const getExpenses = async (req, res) => {
  console.log("TODO: get all expenses of particular month of signed-in user");
  res.send("TODO: get all expenses of particular month of signed-in user");
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
const addExpense = async (req, res) => {
  console.log("TODO: add 1 expense of particular month of signed-in user");
  res.send("TODO: add 1 expense of particular month of signed-in user");
};

module.exports = {
  getExpenses,
  addExpense,
  test
};
