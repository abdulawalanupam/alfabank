// <!-- ========== Login button event handler ========== -->
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("transaction-area").style.display = "block";
});

// <!-- ========== Deposit button event handler ========== -->
document.getElementById("addDeposit").addEventListener("click", function () {
  const depositAmount = inputAmount("depositAmount");
  spanTextAmount("currentDeposit", depositAmount);
  spanTextAmount("currentBalance", depositAmount);

  document.getElementById("depositAmount").value = "";
});

// <!-- ========== Withdraw button event handler ========== -->
document.getElementById("addWithdraw").addEventListener("click", function () {
  const withdrawAmmount = inputAmount("withdrawAmount");
  spanTextAmount("currentWithdraw", withdrawAmmount);
  spanTextAmount("currentBalance", -1 * withdrawAmmount);

  document.getElementById("withdrawAmount").value = "";
});

// <!-- ========== FUNCTIONS ========== -->
function inputAmount(id) {
  const amountValue = document.getElementById(id).value;
  const amountNumber = parseFloat(amountValue);
  //Error handle
  if (amountValue == "") {
    alert("Please enter any number!");
    amountNumber = 0;
  }
  return amountNumber;
}

function spanTextAmount(id, addAmount) {
  const amountValue = document.getElementById(id).innerText;
  const amountNumber = parseFloat(amountValue);
  const totalAmount = addAmount + amountNumber;
  document.getElementById(id).innerText = totalAmount;
}
