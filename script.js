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

function renderBasket() {
  let basketDishesRef = document.getElementById("basketDishes");
  basketDishesRef.innerHTML = "";

  if (localStorage.getItem("basketDishes")) {
    basketDishes = getFromLocalStorage("basketDishes", basketDishes);
  }

  for (let indexBasket = 0; indexBasket < basketDishes.length; indexBasket++) {
    basketDishesRef.innerHTML += generateBasketTemplate(indexBasket);
  }
  renderBasketSummary()
}

/* ====================================
            Warenkorb
======================================= */

function addToBasket(index) {

  if (dishes[index].amount == 0) {
    basketDishes.push(dishes[index])
    dishes[index].amount++
  }else {
    dishes[index].amount++
  }
    renderDishes();
    renderBasket();
}

   function increaseAmount (indexBasket) {
    basketDishes[indexBasket].amount++;
    

    renderDishes();
    renderBasket();
  }

  function decreaseAmount (indexBasket) {
    if (basketDishes[indexBasket].amount > 1) {
      basketDishes[indexBasket].amount--;
    } else {
      basketDishes[indexBasket].amount = 0;
      basketDishes.splice(indexBasket, 1);
    }

    renderDishes();
    renderBasket();
  }

  // saveToLocalStorage("basketDishes", basketDishes); // speichert die Gerichte im local Storage


/* ==============================================================
    Gericht addieren, suptrahieren und Gesamtsumme aktualisieren
================================================================= */

function renderBasketSummary() {
  let subtotal = 0;
  let delivery = 0;
  let total = 0;

  for (let index = 0; index < basketDishes.length; index++) {
    let dish = basketDishes[index];
    let priceForDish = dish.preis * dish.amount;
    subtotal += priceForDish;    
  }

  if (basketDishes.length > 0) {
    delivery = 5.00;
  }

  total = subtotal + delivery;

  let basketSummaryRef = document.getElementById("basketSummary");
  basketSummaryRef.innerHTML = generateBasketSummaryTemplate(subtotal, delivery, total);

}

/* ====================================
            Löschen des Warenkorb
======================================= */

function deleteBasket(indexBasket) {
  basketDishes[indexBasket].amount = 0;
  basketDishes.splice(indexBasket,1)

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
