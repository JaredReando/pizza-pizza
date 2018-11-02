// BUSINESS LOGIC --------------
var smallPizzaCost = 10.50;
var mediumPizzaCost = 14.50;
var largePizzaCost = 19.50;
var xlargePizzaCost = 23.50;


function Order() {
  this.pizzaOrder = [],
  this.currentID = 0
}

Order.prototype.assignId = function(order) {
  this.currentID += 1;
  return this.currentID;
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

Pizza.prototype.calcPrice = function (pizza) {
  var toppingsTotal = 0;
  this.cost = 0;

  switch (this.size) {
    case "Small":
      this.cost += smallPizzaCost
      break;
    case "Medium":
      this.cost += mediumPizzaCost
      break;
    case "Large":
      this.cost += largePizzaCost
      break;
    case "Extra Large":
      this.cost += xlargePizzaCost
      break;
    default:

  }

  for(var i = 0; i < this.toppings.length; i++) {
    toppingsTotal += 1;
  }
console.log(toppingsTotal);
  this.cost += (toppingsTotal * .50);
  this.cost = "$" + this.cost.toFixed(2);
}


var pizza1 = new Pizza(['cheese', 'onion', 'pepperoni', 'mushroom'], 'Large');
var pizza2 = new Pizza(['cheddar', 'bacon', 'white sauce', 'fennel'], 'Small');

var myOrder = new Order();

myOrder.addPizza(pizza1);
myOrder.addPizza(pizza2);


// Pizza.prototype.addOrder = function(pizza) {
//   this.toppings.push(pizza);
// }





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

$("body").on("click","button", function(event) {
  event.preventDefault();



  $("#yourOrder").html("<li>" + 'this' + "</li>");
  console.log("Your pressed the order button");

var display = $("input").val(["check1", "check2", "radio1"]);


console.log(display);

});


function displayPizzaOrders(pizzasToDisplay) {
  var pizzaOrder = $("ul#yourOrder");
  var htmlOrderString = "";
  pizzasToDisplay.pizzaOrder.forEach(function(pizza) {
    htmlOrderString += "<li id=" + "one" + ">" + "MyFirstPizza" + "</li>";
  pizzaOrder.html(pizzasToDisplay);
});
};




});
