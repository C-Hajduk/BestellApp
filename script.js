/* ====================================
            rendert die Gerichte
======================================= */

function renderDishes() {
  let menuContentRef = document.getElementById("menuContent");
  menuContentRef.innerHTML = "";
  /*   if (localStorage.getItem("dishes")) {
    dishes = getFromLocalStorage("dishes", dishes);
  } */

  for (let index = 0; index < dishes.length; index++) {
    menuContentRef.innerHTML += generateDishes(index);
  }
}

/* ========================================================================= */

/* function renderBasket() {
  let basketDishes = document.getElementById("basketDishes");
  basketDishes.innerHTML = "";
}

for (let indexBasket = 0; indexBasket < array.length; indexBasket++) {
  const element = array[index];
}
 */
/* ====================================
            Gerichte
======================================= */

/* ====================================
            Warenkorb
======================================= */

// hier muss ich den Inhalt von menuContent hinein pushen

/* ====================================
            Löschen des Warenkorb
======================================= */

// hier muss ich den Inhalt vom Warenkorb löschen
