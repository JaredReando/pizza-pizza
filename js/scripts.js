// BUSINESS LOGIC --------------
function Order() {
  this.pizzaOrder = [],
  this.currentID = 0
}


Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzaOrder.push(pizza);
}

function Pizza(toppings, size, id) {
  this.toppings = toppings,
  this.size = size,
  this.id = id
}

'pepperoni', 'cheese', 'onions', 'olives', ''

Pizza.prototype.addOrder = function(pizza) {
  this.toppings.push(pizza);
}





// Player.prototype.rollDice = function(group) {
//   if (this.turnStatus === false) {
//     console.log("Hey! It's not your turn yet.")
//     return "";
//   }
//
//   var protoDiceResult = Math.floor(Math.random()*6)+1;
//   diceShowUI = protoDiceResult;
//
//   if (protoDiceResult === 1) {
//     this.roundScore = 0;
//     this.turnStatus = false;
//     this.diceRollResult = 0;
//     group.turnCheck(this);
//     console.log("sorry, your turn is over");
//     console.log("You rolled a " + protoDiceResult);
//     console.log("Your round score is: " + this.roundScore);
//     console.log("Your Total score is: " + this.totalScore);
//     return "";
//   } else {
//     this.diceRollResult = protoDiceResult;
//     this.roundScore += this.diceRollResult;
//     console.log("You rolled a " + protoDiceResult);
//     console.log("Your round score is: " + this.roundScore);
//     console.log("Your Total score is: " + this.totalScore);
//     return "";
//   }
// }
//
// Player.prototype.playerHold = function (group) {
//   if (this.turnStatus === false) {
//     console.log("Hey! It's not your turn yet.");
//     return "";
//   }
//   this.totalScore += this.roundScore;
//   this.roundScore = 0;
//   this.diceRollResult = 0;
//   this.turnStatus = false;
//   group.turnCheck(this);
//   if (this.totalScore >= 100) {
//     console.log("You won the game!")
//
//   } else {
//     this.turnStatus = false;
//     return "";
//   }
// }



// CLIENT LOGIC -----------------
$(document).ready(function() {
$("body").on("click","button", function() {
  console.log("Your pressed the order button");
});





});
