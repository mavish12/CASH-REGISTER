const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn-check");
const errorMessage = document.querySelector("#err-msg");
const noOfNotes = document.querySelectorAll(".note-value");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMsg();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value){
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showErrMsg("Would you like to wash dishes!!!🤣");
    }
  } else {
    showErrMsg("Bill amount is invalid");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    // amountToBeReturned = amountToBeReturned % availableNotes[i]
    noOfNotes[i].innerHTML = numberOfNotes;
  }
}

function hideMsg() {
  errorMessage.style.display = "none";
}

function showErrMsg(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}
