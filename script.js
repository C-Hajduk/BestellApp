/* ====================================
            rendert die Gerichte
======================================= */

function renderDishes() {
  let menuContentRef = document.getElementById("menuContent");
  menuContentRef.innerHTML = "";
  if (localStorage.getItem("dishes")) {
    dishes = getFromLocalStorage("dishes", dishes);
  }

  for (let index = 0; index < dishes.length; index++) {
    menuContentRef.innerHTML += generateDishesTemplate(index);
  }
}

/* ========================================================================= */

function renderBasket() {
  let basketDishesRef = document.getElementById("basketDishes");
  basketDishesRef.innerHTML = "";
  if (localStorage.getItem("basket")) {
    basketDishes = getFromLocalStorage("basketDishes", basketDishes);
  }

  for (let indexBasket = 0; indexBasket < basketDishes.length; indexBasket++) {
    basketDishesRef.innerHTML += generateBasketTemplate(indexBasket);
  }
}

/* ====================================
            Gerichte
======================================= */

/* ====================================
            Warenkorb
======================================= */
// hier muss ich den Inhalt von menuContent hinein pushen
function addToBasket(index) {
  let basket = dishes.splice(index, 1);
  basketDishes.push(basket[0]);

  saveToLocalStorage("basketDishes", basketDishes);

  renderDishes();
  renderBasket();
}

/* ====================================
            Löschen des Warenkorb
======================================= */
// hier muss ich den Inhalt vom Warenkorb löschen
function deletBasket() {
  basketDishes.splice(indexBasket);

  renderDishes();
  renderBasket();
}
