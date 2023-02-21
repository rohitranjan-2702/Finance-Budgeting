const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getUser = async () => {
  const token = localStorage.getItem("token");
  let userData = { userLoggedIn: false, userName: "" };
  if (!token) {
    return userData;
  }
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  userData = await fetch("http://localhost:5000/users/me", requestOptions)
    .then((response) => {
      if (response.status === 401) {
        localStorage.removeItem("token");
        throw new Error("token expired");
      }
      return response.json();
    })
    .then((result) => {
      console.log(result);
      return { userLoggedIn: true, userName: result.name };
    })
    .catch((error) => {
      console.log("error", error);
      return { userLoggedIn: false, userName: "" };
    });
  return userData;
};

const getMonthlyExpense = async (year, month) => {
  const token = localStorage.getItem("token");
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("year", year);
  urlencoded.append("month", months[month]);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  return await fetch("http://localhost:5000/expense/monthly", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.log("error", error));
};

const addExpense = async (title, year, month, date, amount, type, tags) => {
  const token = localStorage.getItem("token");
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("title", title);
  urlencoded.append("year", year);
  urlencoded.append("month", months[month]);
  urlencoded.append("date", date);
  urlencoded.append("amount", amount);
  urlencoded.append("type", type);
  urlencoded.append("tags[]", tags);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  return await fetch("http://localhost:5000/expense/new", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.log("error", error));
};

const deleteExpense = async (month, year, id) => {
  const token = localStorage.getItem("token");
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("month", months[month]);
  urlencoded.append("year", year);
  urlencoded.append("expenseId", id);

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  return await fetch("http://localhost:5000/expense/delete", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.log("error", error));
};

module.exports = {
  getUser,
  getMonthlyExpense,
  addExpense,
  deleteExpense,
};
