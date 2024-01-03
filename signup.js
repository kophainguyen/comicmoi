class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

// Load users from localStorage on page load
const storedUsers = localStorage.getItem("users");
const users = storedUsers ? JSON.parse(storedUsers) : [];

// Register
function register() {
  const username = document.getElementById("registerUsername").value;
  const useremail = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const cfpassword = document.getElementById("cfPassword").value;

  // Checks
  if (username == "") {
    alert("Please enter your username");
    return false;
  }

  if (useremail == "") {
    alert("Please enter your email");
    return false;
  }

  if (password == "") {
    alert("Please enter a password");
    return false;
  }

  if (cfpassword != password) {
    alert("Please confirm your password");
    return false;
  }

  // Check if the username already exists
  if (users.some((user) => user.username === username)) {
    alert("Username already exists. Please choose another username.");
    return false;
  }

  // Add account into list
  const user = new User(username, password);
  users.push(user);

  // Save users to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  alert("Register successful!");

  // Reset input
  document.getElementById("registerUsername").value = "";
  document.getElementById("registerEmail").value = "";
  document.getElementById("registerPassword").value = "";
  document.getElementById("cfPassword").value = "";
  document.getElementById("terms").checked = false;

  return true;
}

// Login
function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // Checks
  if (username == "") {
    alert("Please enter your username");
    return false;
  }

  if (password == "") {
    alert("Please enter your password");
    return false;
  }

  // Kiểm tra tài khoản có trong users không
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    alert("Login successful!");
    window.location.href = "index2.html";
    return true;
  } else {
    alert("Login failed!");
    return false;
  }
}
