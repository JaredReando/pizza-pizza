// BUSINESS LOGIC --------------
var smallPizzaCost = 10.50;
var mediumPizzaCost = 14.50;
var largePizzaCost = 19.50;
var xlargePizzaCost = 23.50;
var numberOfToppingsOffered = 12;

var myOrder = new Order();

function Order() {
  this.pizzaOrder = [],
  this.currentID = 0,
  this.orderTotal = 0
};

Order.prototype.assignId = function(order) {
  this.currentID += 1;
  return this.currentID;
};

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzaOrder.push(pizza);
};

function Pizza(toppings, size, id) {
  this.toppings = toppings,
  this.size = size,
  this.id = id
};

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
  this.cost += (toppingsTotal * .50);
  this.cost = this.cost.toFixed(2);
};

// CLIENT LOGIC -----------------
$(document).ready(function() {
// Returns checked pizza toppings from form to an array
  function collectPizzaToppings() {
    var toppings = document.getElementsByClassName("toppings");
    var toppingsArray = [];
    for ( i = 0; i < numberOfToppingsOffered; i++) {
      if ( toppings[i].checked === true ) {
          // str += checks[i].value + ", ";
          toppingsArray.push(toppings[i].value);
      }
     }
     return toppingsArray;
  }

  function displayPizzaOrders(pizzasToDisplay) {
    var pizzaOrder = $("ul#yourOrder");
    var htmlOrderString = "";
    var orderTotal = 0;
    var functionPizzaTotal = 0;
    for(var i = 0; i < myOrder.pizzaOrder.length; i++) {
      var toppingsString = myOrder.pizzaOrder[i].toppings.join(", ");
      functionPizzaTotal += parseFloat(myOrder.pizzaOrder[i].cost);
      htmlOrderString += "<h5>Pizza " + (myOrder.pizzaOrder[i].id) + "</h3><li><b>Size:</b> " + myOrder.pizzaOrder[0].size + "</li><li><b>Toppings:</b> " + toppingsString + "</li><li><b>Cost: </b>$" + myOrder.pizzaOrder[i].cost + "</li>";
      $("#yourOrderItems").html(htmlOrderString);
    };
    myOrder.orderTotal = functionPizzaTotal.toFixed(2);
    $("p#yourOrderTotal").html("<b>Order Total: </b>$" + myOrder.orderTotal);
  };

  $("body").on("click","button", function(event) {
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizzaSizeChoice]:checked").val();
    var pizzaToppings = collectPizzaToppings();
    if (pizzaSize === undefined) {
      alert("Please fill out the form!");
      return;
    }
    var pizza = new Pizza(pizzaToppings, pizzaSize);
    pizza.calcPrice();
    myOrder.addPizza(pizza);
    displayPizzaOrders();
  });

});
