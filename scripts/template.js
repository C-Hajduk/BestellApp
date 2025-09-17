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
  return `
        <div class="menu_item menu_item_basket">
                <div>${basketDishes[indexBasket].name}</div>
                <button onclick="decreaseAmount(${indexBasket})">-</button>
                <span>${basketDishes[indexBasket].amount}</span>
                <button onclick="increaseAmount(${indexBasket})">+</button>
                <div>${basketDishes[indexBasket].preis.toFixed(2)} €</div>
                <button onclick="deleteBasket(${indexBasket})"><img src="./assets/fonts/trash-can-regular-full.svg" alt="Papierkorb"></button>
        </div>
    `;
}

/* function generateBasketSummary() {
    return `
        <p>Zwischensumme €</p>
        <p>Lieferkosten €</p>
        <p>Gesamt €</p>
    `
} */
