function generateDishesTemplate(index) {
  return `
            <div class="menu_item">
                <div class="item_info">
                    <div>${dishes[index].name}</div>
                    <div>${dishes[index].preis} €</div>
                    <div>${dishes[index].description}</div>
                </div>
                    <button class="add_button" onclick="addToBasket(${index})">+</button>
            </div>

        `;
}

function generateBasketTemplate(indexBasket) {
  return `
        <div class="menu_item">
            <div class="item_info">
                <div>${dishes[indexBasket].name}</div>
                <button>-</button>
                <span>3x</span>
                <button>+</button>
                <div>${dishes[index].preis} €</div>
                <button onclick="deleteBasket(${indexBasket})">trash</button>
            </div>
    `;
}
