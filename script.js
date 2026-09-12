function enterWorld() {

    const intro = document.getElementById("intro");

    intro.classList.add("hidden");

}


function openPlace(place) {

    const world = document.getElementById("world");

    const homeLetter = document.getElementById("home-letter");

    const popup = document.getElementById("popup");

    const title = document.getElementById("popup-title");

    const text = document.getElementById("popup-text");


    // HOME

    if (place === "home") {

        world.style.display = "none";

        homeLetter.style.display = "block";

        return;

    }


    // FOREST

    if (place === "forest") {

        title.textContent = "THE FOREST";

        text.textContent =
            "Somewhere in here are memories I never want to forget.";

    }


    // OCEAN

    if (place === "ocean") {

        title.textContent = "THE OCEAN";

        text.textContent =
            "There are things floating around here that I've never said enough.";

    }


    // OBSERVATORY

    if (place === "observatory") {

        title.textContent = "OBSERVATORY";

        text.textContent =
            "Look closely. Some of the stars are made from our memories.";

    }


    // FUTURE

    if (place === "future") {

        title.textContent = "???";

        text.textContent =
            "You haven't unlocked this place yet.";

    }


    popup.style.display = "flex";

}


function closePlace() {

    const popup = document.getElementById("popup");

    popup.style.display = "none";

}


function closeHome() {

    const world = document.getElementById("world");

    const homeLetter = document.getElementById("home-letter");

    homeLetter.style.display = "none";

    world.style.display = "block";

}


function openLetter() {

    const letter = document.getElementById("letter-content");

    letter.style.display = "block";

}


function closeLetter() {

    const letter = document.getElementById("letter-content");

    letter.style.display = "none";

}
