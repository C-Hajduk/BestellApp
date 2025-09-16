function generateDishes(index) {
  return `
            <div class="menu_item">
                <div class="item_info">
                    <div>${dishes[index].name}</div>
                    <div>${dishes[index].preis} €</div>
                    <div>${dishes[index].description}</div>
                </div>
                    <button onclick="basketDishes"(${}) class="add_button">+</button>
            </div>

        `;
}
