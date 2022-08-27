const bill = $("#bill-text");
const button = $(".tip-buttons");
const custom = $(".custom");
const noOfPeople = $("#people");
const tipPerPerson = $("#tip-amount");
const totalPerPerson = $("#total");
const reset = $(".reset")


let billValue = 0;
let percentageValue = 0;
let percentageNumber = 0;
let noOfPeopleValue = 0;
let tipPerPersonValue = 0;
let totalPerPersonValue = 0;


var btnClicked = false;
var customInput = false;

// event listeners
bill.on("input", function () {
  billValue = parseFloat(bill.val());
  // I used parseFloat() because parseInt() only retuerns a whole number while parseFloat() returns numbers that also contain decimals
  calculator();
  tipPerPerson.html("$0.00");
  totalPerPerson.html("$0.00");
});

button.on("click", function () {
  percentageValue = $(this).html();
  btnClicked = true;
  calculator();
  tipPerPerson.html("$0.00");
  totalPerPerson.html("$0.00");
  if (btnClicked = true) {
    if (percentageValue == "5%") {
      percentageNumber = 5;
    } else if (percentageValue == "10%") {
      percentageNumber = 10;
    } else if (percentageValue == "15%") {
      percentageNumber = 15;
    } else if (percentageValue == "25%") {
      percentageNumber = 25;
    } else if (percentageValue == "50%") {
      percentageNumber = 50;
    }
  } else {
    btnClicked = false;
  }
});

custom.on("input", function () {
  percentageNumber = parseFloat(custom.val());
  calculator();
  tipPerPerson.html("$0.00");
  totalPerPerson.html("$0.00");
});

noOfPeople.on("input", function () {
noOfPeopleValue = parseInt(noOfPeople.val());
calculator();
  if (noOfPeopleValue <= 0) {
    $("span").css("display", "block");
    noOfPeople.addClass("people-input");
    tipPerPerson.html("$0.00");
    totalPerPerson.html("$0.00");
  } else {
    $("span").css("display", "none");
    noOfPeople.removeClass("people-input");
  }
});

reset.on("click", function () {
  tipPerPerson.html("$0.00");
  totalPerPerson.html("$0.00");
  if(button.hasClass("active")) {
    button.removeClass("active");
  }
  percentageNumber = 0;
  bill.val("");
  noOfPeople.val("");
  custom.val("");
})


function calculator() {
  tipPerPersonValue = (((billValue * percentageNumber) / 100) / noOfPeopleValue).toFixed(2);
  totalPerPersonValue = ((billValue / noOfPeopleValue) + (((billValue * percentageNumber) / 100) / noOfPeopleValue)).toFixed(2);
  output();
}

function output() {
  tipPerPerson.html("$" + tipPerPersonValue);
  totalPerPerson.html("$" + totalPerPersonValue);
}
