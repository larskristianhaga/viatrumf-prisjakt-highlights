/**
 * Config for SAS EuroBonus
 * @type {{baseURL: string, color: string, text: string}}
 */
const sasConfig = {
    "baseURL": "https://onlineshopping.flysas.com/nb-NO/butikker", // Example URL: https://onlineshopping.flysas.com/nb-NO/butikker/tirendo/01896308-e17a-7082-8889-9601fc9f7211
    "color": "#006",
    "text": "SAS EuroBonus",
}

/**
 * Config for ViaTrumf
 * @type {{baseURL: string, color: string, text: string}}
 */
const viaTrumfConfig = {
    "baseURL": "https://viatrumf.no", // Example URL: https://viatrumf.no/cashback/trumflampegiganten
    "color": "#0076DF",
    "text": "Viatrumf",
}

const sasShops = async (useCache = false) => {
    if (useCache) {
        return sasStoresCache;
    }

    console.debug("Getting SAS shops");
    const shopsURL = "https://onlineshopping.loyaltykey.com/api/v1/shops?filter[channel]=SAS&filter[language]=nb&filter[country]=NO&filter[amount]=5000&filter[compressed]=true";

    try {
        const response = await fetch(shopsURL);
        console.debug("Response from SAS shops:", response);
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch SAS shops:", error);
        return null;
    }
}

const viaTrumfShops = async (useCache = false) => {
    if (useCache) {
        return viaTrumfStoresCache;
    }

    console.debug("Getting ViaTrumf shops");
}

/**
 * Function to check if the button for show more prices exists and click it.
 *
 * @param {Document} document
 * @returns {void}
 */
function checkIfShowMorePricesButtonExistsAndClick(document) {
    const showMoreButton = document.querySelector("#price-list-panel > div:nth-child(3) > button > span");

    if (showMoreButton) {
        console.debug("Button for show more prices found, clicking it");
        showMoreButton.click();
    }
}

/**
 * Function to check if the button for show more stores exists and click it.
 *
 * @param {Document} document
 * @returns {void}
 */
function checkIfShowMoreStoresButtonExistsAndClick(document) {
    const showMoreStoresButton = document.querySelector('[aria-label="Vis alle tilbud uten direktelenke"]');

    if (showMoreStoresButton) {
        console.debug("Button for show more stores found, clicking it");
        showMoreStoresButton.click();
    }
}

/**
 * Function to style the card element
 * @returns {void}
 * @param card {Element}
 * @param color {string}
 */
function styleEligibleCard(card, color) {
    card.style.border = `2px solid ${color}`;
    card.style.borderRadius = '10px';
}

function overwriteGoToStoreButtonText(button, text) {
    button.textContent = text;
}

function overwriteGoToStoreButtonLink(button, url) {
    button.onclick = function () {
        window.open(url);
    }
}

function overwriteGoToStoreButtonColor(button, color) {
    button.style.backgroundColor = color;
}

/**
 * Function to highlight the shop element if it is eligible for ViaTrumf.
 *
 * @returns {void}
 */
async function highlightShop() {
    // Only do search on the DOM if the url is on a product page, like so; https://www.prisjakt.no/product.php?p=8053700
    if (!window.location.href.includes("product.php?p=")) {
        console.debug("Not a product page, returning");
        return;
    }

    const sasShopsList = await sasShops(true);
    const viaTrumfShopsList = await viaTrumfShops(true);

    checkIfShowMorePricesButtonExistsAndClick(document);
    checkIfShowMoreStoresButtonExistsAndClick(document);

    const priceRowElements = document.querySelectorAll('[data-test="PriceRow"]');

    priceRowElements.forEach((priceRowElement) => {
        let shopName = priceRowElement.querySelector('[class^="StoreInfoTitle"]').textContent.toLowerCase();

        if (shopName.includes(".")) {
            console.debug("Shop name contains a dot: " + shopName);
            shopName = shopName.split(".")[0];
        }

        console.debug("Store name: ", shopName);

        const sasShop = sasShopsList.data.find(shop => shop.name.toLowerCase().includes(shopName));
        const viaTrumfShop = viaTrumfShopsList.data.find(shop => shop.name.toLowerCase().includes(shopName));

        if (sasShop && viaTrumfShop) {
            console.debug("Shop found in both SAS and ViaTrumf:", shopName);
            styleEligibleCard(priceRowElement, "#FFD700");

            const goToStoreButton = priceRowElement.querySelector('[aria-label="Vis i butikk"]');
            overwriteGoToStoreButtonColor(goToStoreButton, "#FFD700");

            const goToStoreButtonChild = goToStoreButton.firstChild;
            overwriteGoToStoreButtonText(goToStoreButtonChild, "SAS EuroBonus & ViaTrumf");

            return;
        }

        if (sasShop) {
            console.debug("SAS shop found:", shopName);
            styleEligibleCard(priceRowElement, sasConfig.color);

            const goToStoreButton = priceRowElement.querySelector('[aria-label="Vis i butikk"]');
            overwriteGoToStoreButtonColor(goToStoreButton, sasConfig.color);

            const shopURL = `${sasConfig.baseURL}/${sasShop.slug}/${sasShop.uuid}`;
            overwriteGoToStoreButtonLink(goToStoreButton, shopURL);

            const goToStoreButtonChild = goToStoreButton.firstChild;
            overwriteGoToStoreButtonText(goToStoreButtonChild, sasConfig.text);

            return;
        }

        if (viaTrumfShop) {
            console.debug("ViaTrumf shop found:", shopName);
            styleEligibleCard(priceRowElement, viaTrumfConfig.color);

            const goToStoreButton = priceRowElement.querySelector('[aria-label="Vis i butikk"]');
            overwriteGoToStoreButtonColor(goToStoreButton, viaTrumfConfig.color);

            const shopURL = `${viaTrumfConfig.baseURL}/${viaTrumfShop.url}`;
            overwriteGoToStoreButtonLink(goToStoreButton, shopURL);

            const goToStoreButtonChild = goToStoreButton.firstChild;
            overwriteGoToStoreButtonText(goToStoreButtonChild, viaTrumfConfig.text);

            return;
        }

        if (!sasShop && !viaTrumfShop) {
            console.debug("Shop not found in SAS or ViaTrumf:", shopName);
        }
    });
}

/**
 * Function to observe DOM changes
 * @returns {void}
 */
function observeDOMChanges() {
    const observer = new MutationObserver((mutations) => mutations.forEach(() => highlightShop()));

    observer.observe(document.body, {
        childList: true
    });
}

/**
 * Function to run when the window is loaded
 * @returns {void}
 */
window.onload = () => {
    observeDOMChanges();
};
