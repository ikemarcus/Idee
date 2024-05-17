const steden = [
    // Nederlandse steden
    "Anywhere"
];

const activiteiten = [
    "Onderweg het album van Billie Eilish blasten :)"
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
        const randomActiviteit = randomItem(activiteiten);

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
                const randomNaam = Math.random() < 0.5 ? 'Tom & Ike' : 'Ike & Tom';
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
