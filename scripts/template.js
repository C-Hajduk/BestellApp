function generateDishesTemplate(index) {
  return `
        <div class="menu_item">
            <div class="item_info">
                <div>${dishes[index].name}</div>
                <div>${dishes[index].preis.toFixed(2)} €</div>
                <div>${dishes[index].description}</div>
            </div>
                <button class="add_button" onclick="addToBasket(${index})">+</button>
        </div>
    `;
}

function generateBasketTemplate(indexBasket) {
    let dish = basketDishes[indexBasket];
    // Aktuelles Gericht für leichteren Zugriff
    let totalPrice = (dish.preis * dish.amount).toFixed(2);
    // Preis des Gerichtes multipliziert mit Menge, gerundet auf 2 Nachkommastellen

  return `
        <div class="menu_item menu_item_basket">
                <div>${basketDishes[indexBasket].name}</div>
                <button onclick="decreaseAmount(${indexBasket})">-</button>
                <span>${basketDishes[indexBasket].amount}</span>
                <button onclick="increaseAmount(${indexBasket})">+</button>
                <div>${totalPrice} €</div>
                <button onclick="deleteBasket(${indexBasket})"><img src="./assets/fonts/trash-can-regular-full.svg" alt="Papierkorb"></button>
        </div>
    `;
}

function generateBasketSummaryTemplate(subtotal, delivery, total) {
    return `
        <p>Zwischensumme: ${subtotal.toFixed(2)} €</p>
        <p>Lieferkosten: ${delivery.toFixed(2)} €</p>
        <p><strong>Gesamt: ${total.toFixed(2)} €</strong></p>
    `;
}
