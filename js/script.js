var tripInfoButton = document.querySelector("button.trip-info");
// console.log(tripInfoButton.outerHTML);
var dailyBudget = document.querySelector("p.daily-budget");
// console.log(dailyBudget.outerHTML);

function tripInfo() {
    var totalBudget = Number(prompt("What is your total budget?"));
    var accommodation = Number(prompt("What are your accomodation costs?"));
    var numDays = Number(prompt("How many days does your trip last?"));
    calculateDailyBudget(totalBudget, accommodation, numDays);
}

function calculateDailyBudget(totalBudget, accommodation, numDays) {
    var daily = ((totalBudget - accommodation) / numDays).toFixed(2);
    dailyBudget.innerText = `You can spend $${daily} a day on food and fun`
}

tripInfoButton.addEventListener("click", function () {
    tripInfo();
});