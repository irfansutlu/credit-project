const calcBtn = document.querySelector("#calc-btn");

calcBtn.addEventListener("click", () => {
  const creditType = document.querySelector("#credit-types");
  const resultDiv = document.querySelector("#results");
  const monthInput = document.querySelector("#month");
  const amountInput = document.querySelector("#amount");

  if (
    creditType.value === "no-one" ||
    !monthInput.value ||
    !amountInput.value
  ) {
    alert("Please fill in the blanks");
  } else if (creditType.value === "house") {
    resultDiv.classList.remove("d-none");
    document.querySelector("#choosen-credit").innerText = "Housing Credit";
    document.querySelector("#interest-rates").innerText = 1.29;
    document.querySelector("#total-month").innerText = monthInput.value;
    document.querySelector("#total-amount").innerText = amountInput.value;
    document.querySelector("#installment").innerText = (
      amountInput.value *
      ((0.0129 * (1 + 0.0129) ** monthInput.value) /
        ((1 + 0.0129) ** monthInput.value - 1))
    ).toFixed(2);
    document.querySelector("#total-result").innerText = (
      document.querySelector("#installment").innerText * monthInput.value
    ).toFixed(2);
  } else if (creditType.value === "personal") {
    resultDiv.classList.remove("d-none");
    document.querySelector("#choosen-credit").innerText =
      "Personal Finance Credit";
    document.querySelector("#interest-rates").innerText = 1.99;
    document.querySelector("#total-month").innerText = monthInput.value;
    document.querySelector("#total-amount").innerText = amountInput.value;
    document.querySelector("#installment").innerText = (
      amountInput.value *
      ((0.0199 * (1 + 0.0199) ** monthInput.value) /
        ((1 + 0.0199) ** monthInput.value - 1))
    ).toFixed(2);
    document.querySelector("#total-result").innerText = (
      document.querySelector("#installment").innerText * monthInput.value
    ).toFixed(2);
  } else if (creditType.value === "auto") {
    resultDiv.classList.remove("d-none");
    document.querySelector("#choosen-credit").innerText = "Auto Credit";
    document.querySelector("#interest-rates").innerText = 1.79;
    document.querySelector("#total-month").innerText = monthInput.value;
    document.querySelector("#total-amount").innerText = amountInput.value;
    document.querySelector("#installment").innerText = (
      amountInput.value *
      ((0.0179 * (1 + 0.0179) ** monthInput.value) /
        ((1 + 0.0179) ** monthInput.value - 1))
    ).toFixed(2);
    document.querySelector("#total-result").innerText = (
      document.querySelector("#installment").innerText * monthInput.value
    ).toFixed(2);
  }
});
