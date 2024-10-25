const shops = [
    "BliVakker",
    "Hotels.com",
    "H&amp;M",
    "LYKO",
    "Strawberry",
    "IKEA",
    "Komplett",
    "Ellos NO",
    "Vita",
    "Kitchn",
    "Radisson Hotels",
    "blush",
    "Lindex",
    "Adlibris",
    "miinto",
    "Proshop",
    "Scandic Hotels",
    "Tilbords",
    "Apple",
    "Nettbuss",
    "Elektroimportoren",
    "Gina Tricot",
    "Nelly",
    "Fredrik &amp; Louisa",
    "Apollo",
    "Viaplay",
    "Care of Carl",
    "Lensway",
    "FotoKnudsen",
    "Eurodel",
    "AVIS",
    "Bakeren og Kokken",
    "Life",
    "VetZoo",
    "Sportmann",
    "RoyalDesign",
    "Christiania Glasmagasin",
    "Lampegiganten",
    "Adidas",
    "Nytelse",
    "Ticketmaster",
    "Dustin Home",
    "H&#248;ie",
    "Premiumtek",
    "Stormberg",
    "LensOn",
    "Zooplus",
    "Gymgrossisten",
    "Rentalcars",
    "Skruvat",
    "Babyshop",
    "Bubbleroom",
    "Jotex",
    "Lufthansa",
    "Expedia",
    "Polarn O. Pyret",
    "ZOO",
    "ASOS",
    "Milrab",
    "Viking Footwear",
    "Coverbrands",
    "Bildeler",
    "Lunehjem",
    "Staypro",
    "Brando",
    "Electrolux",
    "Nordic Nest",
    "mimmis",
    "Askeladden Navnelapper",
    "Platekompaniet",
    "Dogman",
    "VPG",
    "Dyrekassen",
    "Disney+",
    "Samsung",
    "SillySanta",
    "SkinSecret",
    "Guttelus",
    "ComputerSalg",
    "Kondomeriet",
    "COS",
    "inkClub.com",
    "Db",
    "Skogstad Sport",
    "Bangerhead",
    "NOR-WAY Bussekspress",
    "Skomani",
    "Nextory",
    "NordicFeel",
    "LEGO",
    "DFDS",
    "homeroom",
    "Max",
    "NIKE",
    "AIM&#39;N",
    "Magasin",
    "Qatar Airways",
    "Trip",
    "Helly Hansen",
    "Gullfunn",
    "Allente",
    "Pinkorblue",
    "Lekmer",
    "Lappeliten",
    "dekkonline.com",
    "Babysjarm",
    "SkyShowtime",
    "eStore",
    "Treningspartner",
    "L&#248;peshop",
    "Proteinfabrikken",
    "Bodystore",
    "Fjord Line",
    "Kost1",
    "Superkul",
    "Budget",
    "GetYourGuide",
    "Monki",
    "Omio",
    "AEG",
    "Lightup",
    "Emirates",
    "Chillout",
    "Magasinet",
    "Foss Sport",
    "Jakt og Friluft",
    "PetXL",
    "Bj&#246;rn Borg",
    "HUGO BOSS",
    "NLY MAN",
    "Bad",
    "KitchenTime",
    "Dyson",
    "Citybox",
    "Flixbus",
    "Hudprodukter",
    "ASICS",
    "Kajakk og Fritid",
    "Ideal of Sweden",
    "Familiebutikken",
    "SACKit",
    "Brilleland",
    "Devold",
    "Bladkongen",
    "VitaePro",
    "Kinoklubben",
    "Strikkia",
    "L&#39;Occitane",
    "Evenstad Musikk",
    "Strim",
    "Vistaprint",
    "N&#248;stebarn",
    "eBay",
    "BagBrokers",
    "VidaXL",
    "Oslo Skin Lab",
    "Auto Europe no",
    "Myprotein",
    "Brewshop",
    "kinogavekort",
    "Interoptik",
    "ASICS Outlet",
    "Nordic Print",
    "Petster",
    "VitaminX",
    "Sparmax",
    "YouWish",
    "Mister Spex",
    "Lexington",
    "Lagerhaus",
    "Ekstralys",
    "Reforma",
    "K&#228;rcher",
    "Gaminghuset",
    "Barbershop",
    "Klokkegiganten",
    "Rum21",
    "Fyrklovern",
    "Viator",
    "Hunkemoller",
    "SmartaSaker",
    "Kjellmann",
    "Hyttefeber",
    "Lenovo",
    "Home-tex",
    "G-Star Raw",
    "Netthandelen",
    "Newport Home",
    "OBH Nordica",
    "Oakley",
    "Smartphoto",
    "Lampemesteren",
    "Vrbo",
    "Urverket",
    "Skistart",
    "Storytel",
    "Hundeutstyr",
    "Elite Hotels of Sweden",
    "I Love Dogs",
    "Inzpero",
    "Iberostar Hotels and Resorts",
    "Hagl&#246;fs",
    "Foodstuff",
    "Xplora",
    "Weber",
    "Timarco",
    "Plukkselv",
    "Beauty Mall",
    "Racketspesialisten",
    "Puma",
    "Fruugo",
    "CASPARA",
    "Kouture",
    "Lesel&#248;ve",
    "Min Beste Bok",
    "Daniel Wellington",
    "EMP",
    "Beckmann",
    "Golfsenteret",
    "Bedre Inneklima",
    "Shaping New Tomorrow",
    "Fabel",
    "Reebok",
    "Superdry",
    "Etihad Airways",
    "Goboken",
    "Northug",
    "Interhome",
    "Kayani",
    "iMusic",
    "Farfetch",
    "Maxmaling",
    "Karma",
    "Estrid",
    "Husqvarna",
    "STIGA Sports",
    "Campanyon",
    "Barcel&#243; Hotels &amp; Resorts",
    "Kvalitetstid",
    "Extreme Fitness",
    "Berg Watches",
    "Inkmann",
    "Geggamoja",
    "YourSurprise",
    "MiniFinder",
    "Risskov Bilferie",
    "Go City",
    "Bemz",
    "Hult&#233;ns",
    "Fluebinderne",
    "Evoride",
    "Gr&#248;nt Fokus",
    "Cabin Campers",
    "Fraxx",
];
const shopURLs = [
    "/cashback/blivakker-trumf",
    "/cashback/trumfhotels-no",
    "/cashback/h-and-m-trumf",
    "/cashback/lyko-trumf",
    "/cashback/strawberry-trumf",
    "/cashback/ikea-trumf",
    "/cashback/komplett-trumf",
    "/cashback/ellos",
    "/cashback/trumfvita",
    "/cashback/kitchn-trumf",
    "/cashback/trumfradissonhotels",
    "/cashback/blush-trumf",
    "/cashback/lindex-trumf",
    "/cashback/adlibris",
    "/cashback/trumfsmiinto",
    "/cashback/proshop-trumf",
    "/cashback/scandic-hotels-trumf",
    "/cashback/tilbords-trumf",
    "/cashback/trumfapple-store",
    "/cashback/nettbuss-trumf",
    "/cashback/elektroimportoren-trumf",
    "/cashback/gina-tricot-trumf",
    "/cashback/trumfnelly-no",
    "/cashback/fredrik-and-louisa-trumf",
    "/cashback/trumfapollo",
    "/cashback/viaplay-trumf",
    "/cashback/care-of-carl-trumf",
    "/cashback/lensway-trumf",
    "/cashback/trumffotoknudsen",
    "/cashback/eurodel-trumf",
    "/cashback/avis-trumf-1",
    "/cashback/bakeren-og-kokken-trumf",
    "/cashback/life-trumf",
    "/cashback/vetzoo-trumf",
    "/cashback/sportmann-trumf",
    "/cashback/trumfroyaldesign",
    "/cashback/christiania-glasmagasintrumf",
    "/cashback/trumflampegiganten",
    "/cashback/adidas-trumfs",
    "/cashback/nytelse-trumf",
    "/cashback/ticketmaster-trumf",
    "/cashback/dustin-home-trumf",
    "/cashback/hoie-trumf",
    "/cashback/premiumtek-trumf",
    "/cashback/stormberg-trumf",
    "/cashback/lenson-trumf",
    "/cashback/zooplus",
    "/cashback/trumfgymgrossisten",
    "/cashback/rentalcars-trumf",
    "/cashback/trumfskruvat",
    "/cashback/babyshop-trumf",
    "/cashback/trumfbubbleroom",
    "/cashback/jotex-trumf",
    "/cashback/lufthansa-trumf1",
    "/cashback/trumfexpedia-eu",
    "/cashback/trumfpolarn-o-pyretno",
    "/cashback/zoo-trumfs",
    "/cashback/trumfasos",
    "/cashback/milrabtrumf",
    "/cashback/viking-footwear",
    "/cashback/coverbrands-trumf",
    "/cashback/bildeler-trumf",
    "/cashback/lunehjem-trumf",
    "/cashback/staypro-trumf",
    "/cashback/brando-trumf",
    "/cashback/electrolux-trumf",
    "/cashback/nordic-nest-trumf",
    "/cashback/mimmistrumf",
    "/cashback/askeladden-navnelapper",
    "/cashback/platekompaniet-trumf",
    "/cashback/dogman-trumf",
    "/cashback/vpg-trumf",
    "/cashback/dyrekassen-trumf",
    "/cashback/disney-trumfa",
    "/cashback/samsung-trumf",
    "/cashback/sillysanta-trumf",
    "/cashback/skinsecret-trumf",
    "/cashback/guttelus-trumf",
    "/cashback/computersalg",
    "/cashback/kondomeriet-trumf",
    "/cashback/cos-trumf",
    "/cashback/trumfinkclub-no",
    "/cashback/db-trumf1",
    "/cashback/skogstad-sport-trumf",
    "/cashback/trumfbangerhead",
    "/cashback/nor-way-bussekspress-trumf",
    "/cashback/skomani-trumf",
    "/cashback/nextory-trumfs",
    "/cashback/trumfnordic-feel",
    "/cashback/lego-trumf",
    "/cashback/dfds-trumf",
    "/cashback/homeroom-trumf",
    "/cashback/max-trumf",
    "/cashback/nike-no",
    "/cashback/aimn-trumf",
    "/cashback/magasin-trumf",
    "/cashback/qatar-airways-notrumf",
    "/cashback/trip-trumf",
    "/cashback/helly-hansen-trumf",
    "/cashback/gullfunn-trumf",
    "/cashback/allente-trumf",
    "/cashback/pinkorblue-trumf",
    "/cashback/trumflekmer",
    "/cashback/lappeliten-trumf",
    "/cashback/trumfdekkonline",
    "/cashback/babysjarm-trumf",
    "/cashback/skyshowtime-trumf",
    "/cashback/estore-trumf",
    "/cashback/trumftreningspartner",
    "/cashback/lopeshop-trumf",
    "/cashback/trumfproteinfabrikken",
    "/cashback/bodystore-trumf",
    "/cashback/fjord-line-trumf",
    "/cashback/kost1-trumf",
    "/cashback/trumfsuperkul",
    "/cashback/budget-trumf",
    "/cashback/getyourguide-trumf",
    "/cashback/monki-trumf",
    "/cashback/omio-trumf",
    "/cashback/aeg-trumf",
    "/cashback/lightup-trumf",
    "/cashback/emirates-trumf",
    "/cashback/chillout-trumf",
    "/cashback/magasinet-trumf",
    "/cashback/foss-sport-trumf",
    "/cashback/jakt-og-friluft",
    "/cashback/petxl-trumf",
    "/cashback/trumfbj%C3%B6rn-borg",
    "/cashback/hugo-boss-trumf",
    "/cashback/trumfnly-man",
    "/cashback/bad-trumf",
    "/cashback/kitchentimetrumf",
    "/cashback/dyson-trumf",
    "/cashback/citybox-trumf",
    "/cashback/flixbus-trumf2",
    "/cashback/hudprodukter",
    "/cashback/asics-trumf",
    "/cashback/kajakk-og-fritid-trumf",
    "/cashback/ideal-of-sweden-trumf",
    "/cashback/familiebutikken",
    "/cashback/sackit-trumf",
    "/cashback/brilleland-trumf",
    "/cashback/devold-trumf",
    "/cashback/trumfbladkongen",
    "/cashback/vitaepro-trumf",
    "/cashback/kinoklubben-trumf",
    "/cashback/strikkia-trumf",
    "/cashback/loccitane-trumf",
    "/cashback/evenstad-musikk-trumf",
    "/cashback/strim-trumf",
    "/cashback/trumfvistaprint",
    "/cashback/nostebarn-trumf",
    "/cashback/ebay-trumfno",
    "/cashback/bagbrokers-trumf",
    "/cashback/vidaxl-trumf2",
    "/cashback/oslo-skin-lab",
    "/cashback/auto-europe-notrumf",
    "/cashback/myprotein-trumf",
    "/cashback/brewshop-trumf",
    "/cashback/kinogavekort-trumf",
    "/cashback/interoptik-trumf",
    "/cashback/asics-outlet-trumf",
    "/cashback/nordic-print-trumf",
    "/cashback/petster-trumf",
    "/cashback/vitaminx-trumf",
    "/cashback/sparmax",
    "/cashback/youwish",
    "/cashback/misterspex-trumf",
    "/cashback/lexington",
    "/cashback/lagerhaustrumf",
    "/cashback/trumfekstralys",
    "/cashback/reforma-trumf",
    "/cashback/karcher-trumf",
    "/cashback/gaminghuset",
    "/cashback/barbershop-trumf",
    "/cashback/klokkegiganten-trumf",
    "/cashback/trumfrum21",
    "/cashback/fyrklovern-trumf",
    "/cashback/viator-trumf",
    "/cashback/hunkemoller-trumf",
    "/cashback/smartasaker-trumf",
    "/cashback/kjellmann-trumf",
    "/cashback/hyttefeber-trumf",
    "/cashback/lenovo-trumf",
    "/cashback/home-tex-trumf",
    "/cashback/g-star-raw-trumf",
    "/cashback/netthandelen-trumf",
    "/cashback/newport-home-trumf",
    "/cashback/obh-nordica-trumf",
    "/cashback/oakley-trumf",
    "/cashback/smartphoto-trumf",
    "/cashback/lampemesteren-trumf",
    "/cashback/vrbo-trumf",
    "/cashback/urverket-trumf",
    "/cashback/skistarttrumf",
    "/cashback/storytel-trumf",
    "/cashback/hundeutstyr-trumf",
    "/cashback/elite-hotels-of-sweden-trumf",
    "/cashback/i-love-dogs-trumf",
    "/cashback/inzpero-trumf",
    "/cashback/iberostar-trumf",
    "/cashback/haglofs-trumf",
    "/cashback/foodstuff-trumf",
    "/cashback/xplora-trumf",
    "/cashback/weber-trumf",
    "/cashback/timarcotrumf",
    "/cashback/plukkselv-trumf",
    "/cashback/beauty-mall",
    "/cashback/racketspesialisten",
    "/cashback/puma-trumf",
    "/cashback/fruugo-trumf",
    "/cashback/caspara",
    "/cashback/kouture-trumf",
    "/cashback/leselove-trumf",
    "/cashback/min-beste-bok-trumf",
    "/cashback/daniel-wellington-trumf",
    "/cashback/emp-trumf",
    "/cashback/beckmann-trumf",
    "/cashback/golfsenteret-trumf",
    "/cashback/bedre-inneklima-trumf",
    "/cashback/shaping-new-tomorrow-trumf",
    "/cashback/fabel-trumf",
    "/cashback/reebok-trumf",
    "/cashback/trumfsuperdry-no",
    "/cashback/etihad-airways-trumf",
    "/cashback/goboken-trumf",
    "/cashback/northug-trumf",
    "/cashback/interhome-trumf",
    "/cashback/kayani-trumf",
    "/cashback/imusic-trumf",
    "/cashback/farfetch-trumf",
    "/cashback/maxmaling-trumf",
    "/cashback/karma-trumf",
    "/cashback/estrid-trumf",
    "/cashback/husqvarna-trumf",
    "/cashback/stiga-sports-trumf",
    "/cashback/campanyon-trumf",
    "/cashback/barcelo-hotels-and-resorts-trumf",
    "/cashback/kvalitetstid-trumf",
    "/cashback/extreme-fitness-trumf",
    "/cashback/berg-watches-trumf",
    "/cashback/inkmann-trumf",
    "/cashback/geggamoja-trumf",
    "/cashback/yoursurprise-trumf",
    "/cashback/minifinder-trumf",
    "/cashback/risskov-bilferietrumf",
    "/cashback/go-city-trumf",
    "/cashback/bemz-trumf",
    "/cashback/hultens-trumf",
    "/cashback/fluebinderne-trumf",
    "/cashback/evoride-trumf",
    "/cashback/gront-fokus-trumf",
    "/cashback/cabin-campers-trumf",
    "/cashback/fraxx-trumf",
];

const baseViaTrumfURL = "https://viatrumf.no/";

/**
 * Function to add a button to the shop element that will redirect to ViaTrumf
 * @param {Element} button
 * @returns {void}
 */
function addViaTrumfButton(button) {
    button.textContent = 'Gå til ViaTrumf';
    button.style.backgroundColor = 'green';
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
        console.log("Button for show more prices found, clicking it");
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
        console.log("Button for show more stores found, clicking it");
        showMoreStoresButton.click();
    }
}

/**
 * Function to style the shop element if it is eligible for ViaTrumf
 * @param {Element} card
 * @returns {void}
 */
function styleViaTrumfEligibleCard(card) {
    card.style.border = '2px solid green';
    card.style.borderRadius = '10px';
}


/**
 * Function to highlight the shop element if it is eligible for ViaTrumf.
 *
 * @returns {void}
 */
function highlightShop() {
    // Only do search on the DOM if the url is on a product page, like so; https://www.prisjakt.no/product.php?p=8053700
    if (!window.location.href.includes("product.php?p=")) {
        console.log("Not a product page, returning");
        return;
    }

    checkIfShowMorePricesButtonExistsAndClick(document);
    checkIfShowMoreStoresButtonExistsAndClick(document);

    // Get all elements that have a class name starting with "StoreInfoTitle".
    const storeTitleListElements = document.querySelectorAll('[class^="StoreInfoTitle"]');

    storeTitleListElements.forEach((storeTitleElement, index) => {
        let storeName = storeTitleElement.textContent.toLowerCase();

        if (storeName.includes(".")) {
            console.log("Shop name contains a dot: " + storeName);
            storeName = storeName.split(".")[0];
        }

        shops.forEach((shopNameFromList, shopIndex) => {
            const shopNameFromListLower = shopNameFromList.toLowerCase();

            if (storeName.includes(shopNameFromListLower)) {
                // Go backwards in the DOM tree to find the parent element that has data-test="PriceRow"
                let parentElement = storeTitleElement.parentElement;
                while (parentElement && !parentElement.hasAttribute("data-test")) {
                    parentElement = parentElement.parentElement;
                }

                if (parentElement) {
                    styleViaTrumfEligibleCard(parentElement);

                    const button = parentElement.querySelector('[aria-label="Vis i butikk"]');
                    if (button) {
                        addViaTrumfButton(button);
                        button.onclick = function () {
                            window.open(baseViaTrumfURL + shopURLs.at(shopIndex));
                        }
                    }
                }
            }
        })
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
