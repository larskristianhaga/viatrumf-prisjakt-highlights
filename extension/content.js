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

// Create a 2D array to store the shop name and the URL
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

// Function to replace the sell button
function highlightShop() {
    // Only do search on the DOM if the url is on a product page, like so; https://www.prisjakt.no/product.php?p=8053700
    if (!window.location.href.includes("product.php")) {
        console.log("Not a product page, returning");
        return;
    }

    // If the button for show more prices is found, click it
    const showMoreButton = document.querySelector("#price-list-panel > div:nth-child(3) > button > span");

    if (showMoreButton) {
        console.log("Button for show more prices found, clicking it");
        showMoreButton.click();
    }

    // If the button for show stores without direct link is found, click it. It has aria-label="Vis flere butikker"
    const showMoreStoresButton = document.querySelector('[aria-label="Vis alle tilbud uten direktelenke"]');

    if (showMoreStoresButton) {
        console.log("Button for show more stores found, clicking it");
        showMoreStoresButton.click();
    }

    // Get the primary price list where all the shops and prices are listed
    const primaryPriceList = document.querySelector('[data-testid="primary-price-list"]');

    if (primaryPriceList) {
        // Iterate over the children of the primary price list
        primaryPriceList.childNodes.forEach((child, primaryPriceListShopIndex) => {
                // Inside this tree we are looking for an element with the class name "StoreInfoTitle-sc-0-1"
                const storeInfoTitle = child.querySelector('.StoreInfoTitle-sc-0-1');

                // If the element is found, check if the text content is equal to any in the array.
                if (storeInfoTitle) {
                    // Check if the storeInfoTitle text content is equal to any of the shops in the array
                    const shopName = storeInfoTitle.textContent.toLowerCase();

                    // Also check if the storeInfoTitle text content contains any of the shops in the array
                    shops.forEach((shop, shopListIndex) => {
                        if (shopName.includes(shop.toLowerCase())) {
                            // console.log(shop);
                            // If the shop is found, add a class to the parent element
                            child.classList.add('highlighted-shop');

                            const card = document.querySelectorAll('.Card--p51vb4');
                            // console.log(card);

                            const actuallCard = card.item(primaryPriceListShopIndex);
                            // console.log(actuallCard);

                            if (actuallCard) {
                                // console.log("Card found");
                                // Add two new CSS styles to the card
                                actuallCard.style.border = '2px solid green';
                                actuallCard.style.borderRadius = '10px';

                                // Get button element that has the aria label "Vis i butikk"
                                const button = actuallCard.querySelector('[aria-label="Vis i butikk"]');
                                if (button) {
                                    // Change the text content of the button
                                    button.textContent = 'Gå til ViaTrumf';
                                    button.style.backgroundColor = 'green';

                                    // Inject Javascript to when I click the button it will redirect to ViaTrumf
                                    button.onclick = function () {
                                        // Get the shop url from the shopURLs array
                                        window.location.href = "https://viatrumf.no/" + shopURLs.at(shopListIndex);
                                    }
                                }

                            }
                        }
                    });
                }
            }
        );
    }
}

/*
const getAllShopsFromViaTrumf = () => {
    let shops = [[]];

    const result = fetch("https://viatrumf.no/category/paged/all/1000/0/")
        .then(data => {
            // Get all the <a> tags from the response
            console.log(data.body);

            // Data.body is a readable stream, so we need to convert it to a string
            const reader = data.body.getReader();
            const decoder = new TextDecoder('utf-8');

            reader.read().then(function processText({done, value}) {
                if (done) {
                    console.log("Stream complete");
                    return;
                }

                // Convert the value to a string
                const text = decoder.decode(value, {stream: true});

                // Find the start and end index of the shop names
                const startIndex = text.indexOf('<div class="store-name">');
                const endIndex = text.indexOf('</div>', startIndex);

                // Get the shop name
                const shopName = text.slice(startIndex + 24, endIndex);

                // Add the shop name to the shops array
                shops.push([shopName]);

                // Continue reading the stream
                return reader.read().then(processText);
            });

            console.log(shops);

        });
}
 */

// Function to observe DOM changes
function observeDOMChanges() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                highlightShop();
                // getAllShopsFromViaTrumf();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

// Run the function when the window is fully loaded
window.addEventListener('load', () => {
    highlightShop();
    // getAllShopsFromViaTrumf();
    observeDOMChanges();
});
