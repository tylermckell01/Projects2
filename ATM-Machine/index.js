// event listener on withdraw button and deposit button
// it checks whether the other button is open
// and only keeps one open at a time
// when you press submit button after input a $amount,
// the input will be added or subtracted form initial balance

//functions that adds values, subtracts values, and display/hide the info

//

// functions
function withdraw(cB, wA) {
  if (wA > cB) {
    return "Not Enough Funds";
  } else {
    cB -= wA;
    return cB;
  }
}

function deposit(cB, dA) {
  return (cB += dA);
}

function renderAction(cB, type) {
  if (type === "withdraw") {
    infoWrapper.removeChild(depositSubmitButton);
  } else {
    infoWrapper.removeChild(withdrawSubmitButton);
  }
  if (type === "withdraw") {
    isWithdraw = true;
    isDeposit = false;
  } else {
    isWithdraw = false;
    isDeposit = true;
  }

  valueInput.className = `${type}-input`;
  hTag.className = `${type}-text`;
  textNode.className = "current-balance";
  type === "withdraw"
    ? (withdrawSubmitButton.textContent = "SUBMIT")
    : (depositSubmitButton.textContent = "SUBMIT");
  hTag.textContent = `How much would you like to ${type}?`;
  valueInput.value = "";
  currentBalance.textContent = cB;

  infoWrapper.appendChild(hTag);
  infoWrapper.appendChild(textNode);
  infoWrapper.appendChild(valueInput);
  if (type === "withdraw") {
    infoWrapper.appendChild(withdrawSubmitButton);
    withdrawWrapper.appendChild(infoWrapper);
  } else {
    depositWrapper.appendChild(infoWrapper);
    infoWrapper.appendChild(depositSubmitButton);
  }
}

function handleActionTrue(type) {
  if (type === "withdraw") {
    withdrawWrapper.removeChild(infoWrapper);
    infoWrapper.appendChild(depositSubmitButton);
    isWithdraw = false;
  } else if (type === "deposit") {
    depositWrapper.removeChild(infoWrapper);
    infoWrapper.appendChild(withdrawSubmitButton);
    isDeposit = false;
  }
}

// definitions dom stuff, queryselectors

const valueInput = document.createElement("input");
const depositSubmitButton = document.createElement("button");
const withdrawSubmitButton = document.createElement("button");
const hTag = document.createElement("h3");
const textNode = document.createElement("p");
const infoWrapper = document.createElement("div");

const depositWrapper = document.querySelector(".deposit-wrapper");
const withdrawWrapper = document.querySelector(".withdraw-wrapper");
const balance = document.querySelector(".balance-value");
const btns = document.getElementsByClassName("btn");

let isWithdraw = false;
let isDeposit = false;
let currentBalance = 50;

infoWrapper.appendChild(depositSubmitButton);
infoWrapper.appendChild(withdrawSubmitButton);
balance.textContent = `Your current balance is: $${currentBalance}`;
depositSubmitButton.className = "submit-button";
withdrawSubmitButton.className = "submit-button";
infoWrapper.className = "info-wrapper";

// event listeners

btns[0].addEventListener("click", () => {
  isWithdraw
    ? handleActionTrue("withdraw")
    : renderAction(currentBalance, "withdraw");
});

btns[1].addEventListener("click", () => {
  isDeposit
    ? handleActionTrue("deposit")
    : renderAction(currentBalance, "deposit");
});

withdrawSubmitButton.addEventListener("click", () => {
  if (valueInput.value === "") {
    valueInput.value = 0;
  }
  currentBalance = withdraw(currentBalance, parseInt(valueInput.value));
  balance.textContent = `Your current balance is $${currentBalance}`;
  withdrawWrapper.removeChild(infoWrapper);
});

depositSubmitButton.addEventListener("click", () => {
  if (valueInput.value === "") {
    valueInput.value = 0;
  }
  currentBalance = deposit(currentBalance, parseInt(valueInput.value));
  balance.textContent = `Your currenet balance is $${currentBalance}`;
  depositWrapper.removeChild(infoWrapper);
});
