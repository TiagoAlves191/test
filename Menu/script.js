document.addEventListener("DOMContentLoaded", function() {
    const menuItems = {
        en: [
            { name: "Coffee", description: "Freshly brewed coffee", price: "$2.50" },
            { name: "Latte", description: "Espresso with steamed milk", price: "$3.50" },
            { name: "Croissant", description: "Buttery, flaky croissant", price: "$2.00" },
            { name: "Salad", description: "Fresh garden salad", price: "$5.00" }
        ],
        pt: [
            { name: "Café", description: "Café fresco", price: "R$2,50" },
            { name: "Latte", description: "Café espresso com leite vaporizado", price: "R$3,50" },
            { name: "Croissant", description: "Croissant amanteigado e folhado", price: "R$2,00" },
            { name: "Salada", description: "Salada fresca de jardim", price: "R$5,00" }
        ],
        es: [
            { name: "Café", description: "Café recién hecho", price: "$2.50" },
            { name: "Latte", description: "Espresso con leche vaporizada", price: "$3.50" },
            { name: "Croissant", description: "Croissant mantecoso y escamoso", price: "$2.00" },
            { name: "Ensalada", description: "Ensalada fresca de jardín", price: "$5.00" }
        ]
    };

    const menuContainer = document.getElementById("menu-items");
    const menuTitle = document.getElementById("menu-title");
    const languageBtn = document.getElementById("language-btn");
    let currentLanguage = "en";

    function updateMenu(language) {
        menuContainer.innerHTML = "";
        menuItems[language].forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.innerHTML = `
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p>${item.price}</p>
            `;
            menuContainer.appendChild(menuItem);
        });
        // Update menu title based on language
        if (language === "en") {
            menuTitle.textContent = "Our Menu";
        } else if (language === "pt") {
            menuTitle.textContent = "Nosso Cardápio";
        } else if (language === "es") {
            menuTitle.textContent = "Nuestro Menú";
        }
    }

    languageBtn.addEventListener("click", function() {
        if (currentLanguage === "pt") {
            currentLanguage = "en";
            languageBtn.innerHTML = '<img src="img/flag-usa.png" alt="English" class="flag-icon">';
        } else if (currentLanguage === "en") {
            currentLanguage = "es";
            languageBtn.innerHTML = '<img src="img/flag-espanha.png" alt="Español" class="flag-icon">';
        } else {
            currentLanguage = "pt";
            languageBtn.innerHTML = '<img src="img/flag-portugal.png" alt="Português" class="flag-icon">';
        }
        updateMenu(currentLanguage);
    });

    // Set initial language to English
    updateMenu("pt");
});
