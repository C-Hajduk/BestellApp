/* ====================================
            rendert die Gerichte
======================================= */

function renderDishes() {
  let menuContentRef = document.getElementById("menuContent"); // Sucht das div mit id "menuContent", in das die Gerichte eingefügt werden
  menuContentRef.innerHTML = ""; // Leert den Bereich, damit vorherige Inhalte gelöscht werden
  
  if (localStorage.getItem("dishes")) {  // Holt Gerichte aus dem LocalStorage, falls vorhanden
    dishes = getFromLocalStorage("dishes", dishes); 
  }

  for (let index = 0; index < dishes.length; index++) { // Fügt jedes Gericht mithilfe des Templates hinzu
    menuContentRef.innerHTML += generateDishesTemplate(index);
  }
}

function renderBasket() {
  let basketDishesRef = document.getElementById("basketDishes"); 
  // Wir suchen das HTML-Element mit der ID "basketDishes"
  // In dieses Element werden alle Gerichte im Warenkorb eingefügt
  basketDishesRef.innerHTML = "";
  // Wir leeren den Inhalt des Basket-Bereichs
  // Dadurch wird verhindert, dass alte Einträge doppelt angezeigt werden

  if (localStorage.getItem("basketDishes")) { // Holt Basket aus LocalStorage
    basketDishes = getFromLocalStorage("basketDishes", basketDishes);
    // Prüft, ob es im LocalStorage bereits gespeicherte Basket-Gerichte gibt
    // Wenn ja, werden diese in unser Array basketDishes geladen
    // So bleiben die Daten auch nach einem Seitenreload erhalten
  }

  for (let indexBasket = 0; indexBasket < basketDishes.length; indexBasket++) { // Fügt jedes Gericht im Basket hinzu
    basketDishesRef.innerHTML += generateBasketTemplate(indexBasket);
    // Für jedes Gericht im Warenkorb:
    // 1. Wir rufen generateBasketTemplate(indexBasket) auf, das HTML für dieses Gericht erstellt
    // 2. Das generierte HTML wird an das Basket-Div angehängt
    // So wird jedes Gericht einzeln dargestellt
  }
  renderBasketSummary()
  // Am Ende der Funktion rufen wir renderBasketSummary() auf,
  // um die Zwischensumme, Lieferkosten und Gesamtpreis zu berechnen und anzuzeigen
}

/* ====================================
            Warenkorb
======================================= */

function addToBasket(index) {

  if (dishes[index].amount == 0) {
    basketDishes.push(dishes[index]);
    // Wenn die Menge des Gerichtes 0 ist, fügen wir es einmal zum Basket-Array hinzu
    // So verhindern wir, dass dasselbe Gericht mehrfach als separates Element angezeigt wird
    dishes[index].amount++ 
    // Wir erhöhen die Menge des Gerichtes im Array "dishes" um 1
  }else {
    dishes[index].amount++ 
    // Wenn das Gericht bereits im Basket ist, erhöhen wir nur die Menge
  }
    renderDishes(); 
    // Wir rendern das Menü neu, damit sich die Menge im Menü oder auf Buttons ggf. aktualisiert
    renderBasket(); 
    // Wir rendern den Warenkorb neu, damit neue Menge und Gesamtpreis angezeigt werden
}

   function increaseAmount (indexBasket) { 
    basketDishes[indexBasket].amount++; 
    // Erhöht die Menge des Gerichtes an der Position indexBasket um 1
    // Der Preis des einzelnen Gerichtes wird dadurch automatisch höher, weil wir später
    // priceForDish = dish.preis * dish.amount berechnen
    
    renderDishes(); 
    // Aktualisiert das Menü, falls die Menge auch dort sichtbar sein soll
    renderBasket();
    // Aktualisiert den Warenkorb, Menge und Preis werden sofort neu berechnet und angezeigt
  }

  function decreaseAmount (indexBasket) {
    if (basketDishes[indexBasket].amount > 1) {
      basketDishes[indexBasket].amount--; 
    // Wenn die Menge größer als 1 ist, verringern wir sie um 1
    } else {
      basketDishes[indexBasket].amount = 0;
      basketDishes.splice(indexBasket, 1); 
    // Wenn die Menge 1 ist und wir "-" drücken, wird das Gericht aus dem Array gelöscht
    // splice entfernt das Element vollständig aus basketDishes
    }

    renderDishes();
    // Menü neu rendern, damit alle Anzeigen korrekt bleiben
    renderBasket();
    // Warenkorb neu rendern, sodass das Gericht evtl. verschwindet und Preise angepasst werden
  }

  // saveToLocalStorage("basketDishes", basketDishes); // speichert die Gerichte im local Storage


/* ==============================================================
    Gericht addieren, suptrahieren und Gesamtsumme aktualisieren
================================================================= */

function renderBasketSummary() {
  let subtotal = 0;
  // Zwischensumme (Summe aller Gerichte ohne Lieferkosten)
  let delivery = 0;
  // Lieferkosten (werden nur berechnet, wenn Warenkorb nicht leer ist)
  let total = 0;
  // Gesamtpreis (Zwischensumme + Lieferkosten)
  

  for (let index = 0; index < basketDishes.length; index++) {
    let dish = basketDishes[index];
    // Speichert das aktuelle Gericht in der Variable dish für einfachere Berechnungen
    let priceForDish = dish.preis * dish.amount;
    // Berechnet den Preis für dieses Gericht: Einzelpreis * Menge
    subtotal += priceForDish;
    // Addiert den Preis dieses Gerichtes zur Zwischensumme  
    
  }

  if (basketDishes.length > 0) {
    delivery = 5.00;
    // Wenn der Warenkorb nicht leer ist, setzen wir die Lieferkosten auf 5€
    // Wenn leer, bleiben Lieferkosten 0
  }

  total = subtotal + delivery;
  // Gesamtpreis berechnen: Zwischensumme + Lieferkosten

  let basketSummaryRef = document.getElementById("basketSummary");
  // Wir suchen das HTML-Element, in das die Summe angezeigt werden soll
  basketSummaryRef.innerHTML = generateBasketSummaryTemplate(subtotal, delivery, total);
  // Wir rufen das Template auf, das den HTML-Code für die Summenanzeige erzeugt
  // Die berechneten Werte werden direkt in das Template eingefügt
}

/* ====================================
            Löschen des Warenkorb
======================================= */

function deleteBasket(indexBasket) {
  basketDishes[indexBasket].amount = 0;
  // Setzt Menge des gewählten Gerichtes auf 0
  basketDishes.splice(indexBasket,1)
  // Entfernt das Gericht aus dem Basket-Array
  renderBasket();
  // Aktualisiert den Basket visuell.
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
