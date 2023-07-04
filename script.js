const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  // document.getElementById('login-area').style.display = 'none';
  ////// OR ////////
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";

  //   document.getElementById('transaction-area').style.display = 'block';
  ////// OR ////////
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});
