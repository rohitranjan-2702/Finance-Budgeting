// @desc : get all expenses of particular month of signed-in user
// @route: GET /expense/monthly
// @access: private
const getExpenses = async (req, res) => {
  console.log("TODO: get all expenses of particular month of signed-in user");
  res.send("TODO: get all expenses of particular month of signed-in user");
};

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
};
