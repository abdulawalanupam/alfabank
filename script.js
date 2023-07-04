// <!-- ========== Login button event handler ========== -->
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

// <!-- ========== Deposit button event handler ========== -->
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);

  // Error handle by me
  if (depositAmount == "") {
    depositNumber = 0;
  }

  /* const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositNumber = parseFloat(currentDeposit);
  const totalDepsit = depositNumber + currentDepositNumber;
  document.getElementById("currentDeposit").innerText = totalDepsit;

  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;
  document.getElementById("currentBalance").innerText = totalBalance; */

  ////////// Work with single common Function //////////
  function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
  }

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  // Clear input value
  document.getElementById("depositAmount").value = "";
});
