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

export const getUser = async () => {
  const token = localStorage.getItem("token");
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  return await fetch("http://localhost:5000/users/me", requestOptions)
    .then((response) => {
      if (response.status === 401) {
        localStorage.setItem(
          "user",
          JSON.stringify({ isAuthed: false, name: "" })
        );
        localStorage.setItem("token", "");
        throw new Error("unauthorized");
      }
      return response.json();
    })
    .then((result) => {
      return [null, result];
    })
    .catch((error) => {
      console.log("error", error);
      return [error, null];
    });
};

export const getMonthlyExpense = async (year, month) => {
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
    .then((response) => {
      if (response.status === 401) {
        localStorage.setItem(
          "user",
          JSON.stringify({ isAuthed: false, name: "" })
        );
        localStorage.setItem("token", "");
        throw new Error("unauthorized");
      }
      return response.json();
    })
    .then((result) => {
      return [null, result];
    })
    .catch((error) => {
      console.log("error", error);
      return [error, null];
    });
};

export const addExpense = async (
  title,
  year,
  month,
  date,
  amount,
  type,
  tags
) => {
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
    .then((response) => {
      if (response.status === 401) {
        localStorage.setItem(
          "user",
          JSON.stringify({ isAuthed: false, name: "" })
        );
        localStorage.setItem("token", "");
        throw new Error("unauthorized");
      }
      return response.json();
    })
    .then((result) => {
      return [null, result];
    })
    .catch((error) => {
      console.log("error", error);
      return [error, null];
    });
};

export const deleteExpense = async (month, year, id) => {
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
    .then((response) => {
      if (response.status === 401) {
        localStorage.setItem(
          "user",
          JSON.stringify({ isAuthed: false, name: "" })
        );
        localStorage.setItem("token", "");
        throw new Error("unauthorized");
      }
      return response.json();
    })
    .then((result) => {
      return [null, result];
    })
    .catch((error) => {
      console.log("error", error);
      return [error, null];
    });
};
