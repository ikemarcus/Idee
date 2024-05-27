const steden = [
    // Nederlandse steden
    "Amsterdam", "Rotterdam", "Utrecht", "Den Haag", "Eindhoven",
    "Maastricht", "Groningen", "Leiden", "Delft", "Arnhem",
    "Nijmegen", "Haarlem", "Breda", "Tilburg", "Zwolle",
    "Alkmaar", "Amersfoort", "Apeldoorn", "Den Bosch", "Enschede",
    "Leeuwarden", "Middelburg", "Roermond", "Venlo", "Vlissingen",
    "Zoetermeer", "Zandvoort", "Hengelo", "Heerlen", "Hilversum",
    "Dordrecht", "Oss", "Veenendaal", "Hoofddorp", "Houten",
    "Emmen", "Assen", "Helmond", "Sittard", "Hoorn",
    "Ede", "Gouda", "Almere", "Schiedam", "Katwijk",
    "Vlissingen", "Terneuzen", "Bergen op Zoom", "Gorinchem", "Hoogeveen",
    "Lelystad", "Heerhugowaard", "Capelle aan den IJssel", "Nieuwegein", "Vlaardingen",
    "Spijkenisse", "Deventer", "Zeist", "Lisse", "Wageningen",

    // Belgische steden
    "Brussel", "Antwerpen", "Gent", "Brugge", "Leuven",
    "Luik", "Mechelen", "Kortrijk", "Hasselt", "Oostende",
    "Namen", "Mons", "Aalst", "Turnhout", "Sint-Niklaas",
    "Genk", "Roeselare", "Tienen", "Tongeren", "Dendermonde",
    "Ieper", "Lier", "Lokeren", "Vilvoorde", "Heist-op-den-Berg",
    "Herentals", "Knokke-Heist", "Maasmechelen", "Aarschot", "Ninove"
];

const activiteiten = [
    "een museum bezoeken", "een fietstocht maken", "een wandeling maken in een park",
    "een historische tour doen", "een boottocht maken", "winkelen in het stadscentrum",
    "eten in een lokaal restaurant", "een concert bijwonen", "een theater bezoeken",
    "een fotografie tour doen", "een kunstgalerie bezoeken", "picknicken",
    "een dierentuin bezoeken", "uitgaan naar een bar of club", "een lokale markt bezoeken",
    "een workshop volgen", "een festival bezoeken", "kajakken of kanoën",
    "een botanische tuin bezoeken", "een kasteel of paleis bezoeken",
    "een aquarium bezoeken", "een pretpark bezoeken", "een speurtocht doen",
    "een escape room doen", "een proeverij van lokale producten doen",
    "een brouwerij of wijngaard bezoeken", "een sportevenement bezoeken",
    "een strand bezoeken", "een natuurreservaat bezoeken", "sterrenkijken",
    "een fotoworkshop volgen", "een street art tour doen", "een workshop pottenbakken volgen",
    "een workshop schilderen volgen", "een cooking class volgen",
    "een dansles volgen", "yoga in het park doen", "een planetarium bezoeken",
    "een waterpark bezoeken", "een spa of wellnesscentrum bezoeken",
    "een workshop fotografie volgen", "een dierenpark bezoeken",
    "wandelen door een historisch centrum", "een lokale brouwerij bezoeken",
    "een lokaal theater bezoeken", "een windmolen bezoeken",
    "een lokale boerderij bezoeken", "een carnavalsoptocht bezoeken",
    "een proeverij van kaas en wijn doen", "een chocolademuseum bezoeken",
    "een kookworkshop volgen", "een kerstmarkt bezoeken",
    "een muziekfestival bijwonen", "een jazzclub bezoeken",
    "sightseeing met een hop-on-hop-off bus doen", "een historische begraafplaats bezoeken",
    "een openluchtmuseum bezoeken", "een lokale parade bezoeken",
    "wandelen langs de grachten", "een lokale vismarkt bezoeken",
    "een dagtocht naar de kust doen", "een proeverij van Belgische bieren doen",
    "een culinaire tour doen", "munzies zoeken", 
    "een luchtballonvaart maken", "een kookcursus volgen", "een wijnproeverij doen",
    "een speleologie avontuur", "een kabelbaanrit maken", "een bezoek aan een planetarium",
    "een lokale bakkerij bezoeken", "een foodtruck festival bezoeken", 
    "een escape room doen", "een bezoek aan een dierenasiel", "street food proeven",
    "mee doen aan een stadsfotografie wedstrijd", "een bezoek aan een aquarium",
    "proeven van lokale gebakjes", "een bezoek aan een lokale wijngaard", 
    "een boottour door de grachten", "een wandeling door historische wijken",
    "een bezoek aan een oude fabriek", "een bezoek aan een kunstfestival",
    "proeven van ambachtelijk ijs", "een bezoek aan een pop-up markt",
    "een stadsfiets huren", "een graffiti workshop volgen",
    "een avondwandeling maken", "meedoen aan een stadsjacht", "een bezoek aan een science center",
    "een bezoek aan een avonturenpark", "proeven van straatvoedsel",
    "een rondleiding door een historisch theater", "een boek lezen in een stadspark",
    "een gratis stadswandeling maken", "een openbare bibliotheek bezoeken", "straatmuzikanten beluisteren",
    "een gratis kunsttentoonstelling bezoeken", "een bezoek aan een openbare tuin",
    "een historische wijk verkennen", "mensen kijken op een plein", "een openbare lezing bijwonen",
    "een openbare kunstinstallatie bekijken", "een gratis concert in het park bijwonen",
    "de zonsondergang bekijken", "vogels spotten in een park", "een gratis stadsfestival bezoeken",
    "een wandeling langs het water maken", "fietsen door de stad", "een openbare markt bezoeken",
    "een wandeling maken over een brug", "een straatartiest bekijken", "een gratis sportevenement bijwonen",
    "historische gebouwen fotograferen", "een gratis film in het park bekijken",
    "een openbare speeltuin bezoeken", "een historische kerk bezoeken", "gratis proefmonsters proberen op een markt"
];

const avondActiviteiten = [
    "naar de bioscoop gaan", "dineren in een sfeervol restaurant", "een avondwandeling maken",
    "een cocktailbar bezoeken", "naar een comedyshow gaan", "sterren kijken",
    "een nachttour doen", "een avondrondvaart maken", "bowlen",
    "een concert bijwonen", "een theaterstuk zien", "een avondmarkt bezoeken",
    "een nachtelijke fotoshoot doen", "een spooktocht maken", "een kroegentocht doen",
    "karaoke zingen", "een nachtelijke stadswandeling maken", "een dansfeest bijwonen",
    "een nachtelijke fietstocht maken", "een nachtelijke fotoworkshop doen",
    "een nachtelijk foodfestival bezoeken", "een nachtelijke vuurwerkshow bekijken"
];

const thuisActiviteiten = [
    "een filmavond houden", "een bordspel spelen", "een kookwedstrijd houden",
    "een thuis-spa-dag houden", "een boekenclub houden", "een DIY-project doen",
    "een videogame-marathon houden", "een puzzel maken", "een themafeestje houden",
    "een karaoke-avond houden", "een cocktailavond houden", "een knutselproject doen",
    "een bakdag houden", "een online cursus volgen", "een schilderworkshop doen",
    "een tuinfeestje houden", "een home theateravond houden", "een fotoboek maken",
    "een meditatie- en yoga-sessie houden", "een muziekavond houden", "een scrapbooking sessie houden",
    "een kaartspelavond houden", "een huis opruimen en herinrichten", "een terrarium maken",
    "een cocktailworkshop thuis houden", "een stargazing-avond houden", "een DIY-spa-dag houden",
    "een online schildercursus volgen", "een indoor picknick houden", "een creatieve schrijfsessie houden",
    "een bordspeltoernooi organiseren", "een thematische kookavond organiseren",
    "een avondje schilderen", "een knutselmarathon houden", "een filmfestival thuis organiseren",
    "een boekenruilavond houden", "een avondje cocktails shaken", "een podcast luisteravond houden",
    "een DIY-cadeau maken", "een indoor sporttoernooi organiseren", "een avondje mozaïeken",
    "een thuisconcert houden", "een bordspel-ontwerpavond organiseren", "een avondje kalligraferen"
];


function randomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

let fadeInInterval;

function genereerStadEnActiviteit() {
    console.log("Functie genereerStadEnActiviteit wordt aangeroepen...");
    
    // Verberg de knop en toon de laadbalk
    const knop = document.querySelector('button');
    knop.style.display = 'none';
    document.getElementById('loader').classList.remove('hidden');

    // Verberg de namenGenerator box
    const namenGenerator = document.getElementById('namenGenerator');
    namenGenerator.style.display = 'none';

    // Als er nog een fadeInInterval actief is, stop deze
    if (fadeInInterval) clearInterval(fadeInInterval);

    // Simuleer het genereren van een stad en activiteit na 2 seconden
    setTimeout(function() {
        console.log("Stad en activiteit aan het genereren...");

        // Simuleer het genereren van een stad en activiteit
        const randomStad = randomItem(steden);
        const activiteitType = document.getElementById('activiteitType').value;
        let randomActiviteit;
        switch(activiteitType) {
            case 'regulier':
                randomActiviteit = randomItem(activiteiten);
                break;
            case 'avond':
                randomActiviteit = randomItem(avondActiviteiten);
                break;
            case 'thuis':
                randomActiviteit = randomItem(thuisActiviteiten);
                break;
            default:
                randomActiviteit = randomItem(activiteiten);
        }

        // Voeg de stad en activiteit toe aan het resultaatElement
        const resultaatElement = document.getElementById('resultaat');
        resultaatElement.innerHTML = ""; // Maak het resultaat leeg

        // Voeg het woord "Bezoek" toe aan het resultaatElement
        const bezoekSpan = document.createElement('span');
        bezoekSpan.textContent = "Bezoek ";
        resultaatElement.appendChild(bezoekSpan);

        // Voeg de stad toe aan het resultaatElement met highlight
        const stadSpan = document.createElement('span');
        stadSpan.classList.add('highlight');
        stadSpan.textContent = randomStad;
        stadSpan.style.opacity = 0; // Verberg de stad
        resultaatElement.appendChild(stadSpan);

        // Voeg "en ga" toe aan het resultaatElement
        const enGaSpan = document.createElement('span');
        enGaSpan.textContent = " en ga ";
        resultaatElement.appendChild(enGaSpan);

        // Voeg de activiteit toe aan het resultaatElement na "en ga" met highlight
        const activiteitSpan = document.createElement('span');
        activiteitSpan.classList.add('highlight');
        activiteitSpan.textContent = randomActiviteit;
        activiteitSpan.style.opacity = 0; // Verberg de activiteit
        resultaatElement.appendChild(activiteitSpan);

        // Fade-in van de stad gedurende 1 seconde
        fadeIn(stadSpan, 500);

        // Toon de activiteit na 2 seconden voor 1 seconde
        setTimeout(function() {
            fadeIn(activiteitSpan, 500);

            // Voeg dit toe binnen de setTimeout-functie van genereerStadEnActiviteit, na het tonen van de activiteit
            setTimeout(function() {
                console.log("Naam aan het genereren...");
                const randomNaam = Math.random() < 0.5 ? 'Tom' : 'Ike';
                const randomNaamElement = document.getElementById('randomNaam');
                randomNaamElement.textContent = randomNaam;

                // Reset de positie en opacity van randomNaamElement
                randomNaamElement.style.top = '50px'; // Beginpositie onderaan
                randomNaamElement.style.opacity = 0;

                const namenGenerator = document.getElementById('namenGenerator');
                namenGenerator.style.display = 'block';

                // Laat de naam invliegen van onder
                setTimeout(function() {
                    randomNaamElement.style.transition = 'top 0.5s ease-out, opacity 0.5s ease-out';
                    randomNaamElement.style.top = '0'; // Eindpositie
                    randomNaamElement.style.opacity = 1;

                    // Verberg de laadbalk en toon de knop na 0.5 seconden
                    setTimeout(function() {
                        document.getElementById('loader').classList.add('hidden');
                        knop.style.display = 'block';
                    }, 500); // Verberg de laadbalk 0.5 seconden nadat de naam verschenen is
                }, 100);
            }, 500); // Start de naamgeneratie 0.5 seconden nadat de activiteit is verschenen

        }, 2000); // Laat de activiteit verschijnen na 2 seconden

    }, 2000); // Start na 2 seconden
}



function fadeIn(element, duration) {
    let opacity = 0;
    const intervalTime = duration / 10;
    const fadeInInterval = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(fadeInInterval);
        } else {
            opacity += 0.1;
            element.style.opacity = opacity;
        }
    }, intervalTime);
}
