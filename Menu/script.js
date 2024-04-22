document.addEventListener("DOMContentLoaded", function() {
    const menuItems = {
        en: [
            { name: "Coffee", category: "coffee", description: "Freshly brewed coffee", price: "$2.50" },
            { name: "Latte", category: "coffee", description: "Espresso with steamed milk", price: "$3.50" },
            { name: "Tea", category: "drinks", description: "Assorted teas", price: "$2.00" },
            { name: "Croissant", category: "pastries", description: "Buttery, flaky croissant", price: "$2.00" },
            { name: "Salad", category: "salads", description: "Fresh garden salad", price: "$5.00" }
        ],
        pt: [
            { name: "Café", category: "coffee", description: "Café recém-passado", price: "R$2,50" },
            { name: "Latte", category: "coffee", description: "Espresso com leite vaporizado", price: "R$3,50" },
            { name: "Chá", category: "drinks", description: "Chás variados", price: "R$2,00" },
            { name: "Croissant", category: "pastries", description: "Croissant amanteigado e folhado", price: "R$2,00" },
            { name: "Salada", category: "salads", description: "Salada fresca de jardim", price: "R$5,00" }
        ],
        es: [
            { name: "Café", category: "coffee", description: "Café recién hecho", price: "$2.50" },
            { name: "Latte", category: "coffee", description: "Espresso con leche vaporizada", price: "$3.50" },
            { name: "Té", category: "drinks", description: "Variedad de tés", price: "$2.00" },
            { name: "Croissant", category: "pastries", description: "Croissant mantecoso y escamoso", price: "$2.00" },
            { name: "Ensalada", category: "salads", description: "Ensalada fresca de jardín", price: "$5.00" }
        ]
    };

    const menuContainer = document.getElementById("menu-items");
    const menuTitle = document.getElementById("menu-title");
    const searchInput = document.getElementById("search");
    const languageBtn = document.getElementById("language-btn");
    let currentLanguage = "pt";
    let searchTerm = "";

    function updateMenu() {
        const filteredItems = menuItems[currentLanguage].filter(item => {
            const itemName = item.name.toLowerCase();
            const itemDescription = item.description.toLowerCase();
            return itemName.includes(searchTerm) || itemDescription.includes(searchTerm);
        });

        menuContainer.innerHTML = "";

        filteredItems.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>${item.price}</p>
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    function updateLanguage(language) {
        currentLanguage = language;
        if (currentLanguage === "en") {
            languageBtn.innerHTML = '<img src="img/flag-usa.png" alt="English" class="flag-icon">';
            document.documentElement.lang = "en";
            menuTitle.textContent = "Our Menu";
            searchInput.placeholder = "Search...";
        } else if (currentLanguage === "pt") {
            languageBtn.innerHTML = '<img src="img/flag-portugal.png" alt="Português" class="flag-icon">';
            document.documentElement.lang = "pt";
            menuTitle.textContent = "Nosso Cardápio";
            searchInput.placeholder = "Pesquisar...";
        } else if (currentLanguage === "es") {
            languageBtn.innerHTML = '<img src="img/flag-espanha.png" alt="Español" class="flag-icon">';
            document.documentElement.lang = "es";
            menuTitle.textContent = "Nuestro Menú";
            searchInput.placeholder = "Buscar...";
        }
        updateMenu();
    }

    // Language change functionality
    languageBtn.addEventListener("click", function() {
        if (currentLanguage === "pt") {
            updateLanguage("en");
        } else if (currentLanguage === "en") {
            updateLanguage("es");
        } else {
            updateLanguage("pt");
        }
    });

    // Search functionality
    searchInput.addEventListener("input", function() {
        searchTerm = this.value.trim().toLowerCase();
        updateMenu();
    });

    // Initial language update
    updateLanguage(currentLanguage);

    // Update language when the page loads
    window.addEventListener("load", function() {
        updateLanguage(currentLanguage);
    });
});
