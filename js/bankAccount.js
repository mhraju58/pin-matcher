//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    const transactionArea = document.getElementById("transaction-area");
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
})

//deposit button event handler
const btnDeposit = document.getElementById("btn-deposit");
const errorMessage = document.getElementById("error-deposit-message");
btnDeposit.addEventListener("click", function () {
    const depositNumber = getInputNumber("deposit-amount");
    if (depositNumber > 0) {
        updateSpanText("deposit-balance", depositNumber);
        updateSpanText("main-balance", depositNumber);
        document.getElementById("deposit-amount").value = "";
        errorMessage.style.display = "none";
    }
    else {
        errorMessage.style.display = "block";
    }
})


//withdraw button event handler
const btnWithdraw = document.getElementById("btn-withdraw");
const errorWithdrawMessage = document.getElementById("error-withdraw-message");
btnWithdraw.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdraw-amount");
    if (withdrawNumber > 0) {
        updateSpanText("withdraw-balance", withdrawNumber);
        updateSpanText("main-balance", -1 * withdrawNumber);
        document.getElementById("withdraw-amount").value = "";
        errorWithdrawMessage.style.display = "none";
    }
    else {
        errorWithdrawMessage.style.display = "block";
    }
})
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;

}
function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentBalance = parseFloat(current);
    const totalAmount = addedNumber + currentBalance;
    document.getElementById(id).innerText = totalAmount;
}

