const DateOfBirth = document.querySelector("#dateofbirth");
const LuckyNumber = document.querySelector("#luckynumber");
const CheckButton = document.querySelector("#check-btn");
const Output = document.querySelector("#output");

function CalculateSum(date){
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let i=0;i<date.length;i++)
    sum = sum + Number(date.charAt[i]);
    console.log(sum);
  return sum;
};

function checkIsNumberLucky(sumOfDate, numberToCheck){
  if(sumOfDate % numberToCheck === 0)
    showMessage("Lucky number!");
  else
    showMessage("Not that Lucky");
};

function showMessage(message){
    Output.style.display="block";
    Output.innerText = message;
};

CheckButton.addEventListener("click", () => {
    Output.style.display="none";
  const Date = DateOfBirth.value;
  const NumberToCheck = LuckyNumber.value;
  if (Date && NumberToCheck) {
    const SumOfDate = CalculateSum(Date);
    checkIsNumberLucky(SumOfDate, NumberToCheck);
  } else {
    showMessage("Please enter both the fields");
  }
});
