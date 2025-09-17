/* ====================================
            rendert die Gerichte
======================================= */

function renderDishes() {
  let menuContentRef = document.getElementById("menuContent");
  menuContentRef.innerHTML = "";
  if (localStorage.getItem("dishes")) {
    // checkt ob es was im local storage gibt
    dishes = getFromLocalStorage("dishes", dishes); // holt sich die Gerichte aus dem local storage
  }

  for (let index = 0; index < dishes.length; index++) {
    // geht die Gerichte durch
    menuContentRef.innerHTML += generateDishesTemplate(index); // fügt die Gerichte dem div hinzu
  }
}

function renderBasket() {
  let basketDishesRef = document.getElementById("basketDishes");
  basketDishesRef.innerHTML = "";
  if (localStorage.getItem("basketDishes")) {
    basketDishes = getFromLocalStorage("basketDishes", basketDishes);
  }

  for (let indexBasket = 0; indexBasket < basketDishes.length; indexBasket++) {
    basketDishesRef.innerHTML += generateBasketTemplate(indexBasket);
  }
}

/* ====================================
            Warenkorb
======================================= */

function addToBasket(index) { // index ist die Position des Gerichtes im Array

  if (dishes[index].amount == 0) {
    basketDishes.push(dishes[index])
    dishes[index].amount++
  }else {
    dishes[index].amount++
  }

  // saveToLocalStorage("basketDishes", basketDishes); // speichert die Gerichte im local Storage

  renderDishes();
  renderBasket();
}

/* ====================================
    Gericht addieren und suptrahieren
======================================= */





/* ====================================
      Gesamtsumme aktualisieren
======================================= */



/* ====================================
            Löschen des Warenkorb
======================================= */

function deleteBasket(indexBasket) {
  basketDishes[indexBasket].amount = 0;
  basketDishes.splice(indexBasket,1)

  renderDishes();
  renderBasket();
}

/* =====================================
            Local Storage
======================================== */

/* function saveToLocalStorage(name, array) {
  localStorage.setItem(name,JSON.stringify(array));
}

function getFromLocalStorage(name, myArray) {
  let myArray = JSON.parse(localStorage.getItem(name))
  if (myArray) {
    myArray = myArray;
    return myArray;
  }
} */
