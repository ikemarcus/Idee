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
    "een culinaire tour doen"
];

function randomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function genereerStadEnActiviteit() {
    // Verberg de knop en toon de laadbalk
    const knop = document.querySelector('button');
    knop.style.display = 'none';
    document.getElementById('loader').classList.remove('hidden');

    // Simuleer het genereren van een stad en activiteit na 4 seconden
    setTimeout(function() {
        // Simuleer het genereren van een stad en activiteit
        const randomStad = randomItem(steden);
        const randomActiviteit = randomItem(activiteiten);
        const resultaat = `Bezoek <span class="highlight">${randomStad}</span> en ga <span class="highlight">${randomActiviteit}</span>.`;

        const resultaatElement = document.getElementById('resultaat');
        resultaatElement.innerHTML = ""; // Maak het resultaat leeg

        // Animatie om resultaat letter voor letter te onthullen
        let resultaatTekst = ""; // Tijdelijke variabele om de tekst op te bouwen
        const letters = resultaat.split(""); // Verdeel de resultaattekst in letters
        letters.forEach((letter, index) => {
            setTimeout(() => {
                resultaatTekst += letter; // Voeg de huidige letter toe aan de tijdelijke variabele
                resultaatElement.innerHTML = resultaatTekst; // Update de HTML van het resultaatElement

                // Als alle letters zijn onthuld, verberg de laadbalk en pas de stijl toe op het resultaat
                if (index === letters.length - 1) {
                    document.getElementById('loader').classList.add('hidden');
                    knop.style.display = 'block'; // Terugknop weergeven
                    const highlights = resultaatElement.querySelectorAll('.highlight');
                    highlights.forEach(highlight => {
                        highlight.style.color = '#0288d1'; // Pas de stijl toe op de highlight-elementen
                        highlight.style.fontWeight = 'bold';
                    });
                }
            }, index * 100); // Voeg een vertraging toe om de animatie te creëren
        });
    }, 2000); // 2000 milliseconden = 2 seconden
}




