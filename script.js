function enterWorld() {

    document.getElementById("intro").classList.add("hidden");

}


function openPlace(place) {

    const world = document.getElementById("world");

    const homeLetter = document.getElementById("home-letter");

    const forest = document.getElementById("forest-screen");

    const popup = document.getElementById("popup");

    const title = document.getElementById("popup-title");

    const text = document.getElementById("popup-text");


    /* HOME */

    if (place === "home") {

        world.style.display = "none";

        homeLetter.style.display = "block";

        return;
    }


    /* FOREST */

    if (place === "forest") {

        world.style.display = "none";

        forest.style.display = "block";

        return;
    }


    /* OCEAN */

    if (place === "ocean") {

        title.textContent = "THE OCEAN";

        text.textContent =
            "There are things floating around here that I've never said enough.";

    }


    /* OBSERVATORY */

    if (place === "observatory") {

        title.textContent = "OBSERVATORY";

        text.textContent =
            "Look closely. Some of the stars are made from our memories.";

    }


    /* FUTURE */

    if (place === "future") {

        title.textContent = "???";

        text.textContent =
            "You haven't unlocked this place yet.";

    }


    popup.style.display = "flex";

}


function closePlace() {

    document.getElementById("popup").style.display = "none";

}


function closeHome() {

    document.getElementById("home-letter").style.display = "none";

    document.getElementById("world").style.display = "block";

}


function openLetter() {

    document.getElementById("letter-content").style.display = "block";

}


function closeLetter() {

    document.getElementById("letter-content").style.display = "none";

}


/* =========================
   FOREST
========================= */

function closeForest() {

    document.getElementById("forest-screen").style.display = "none";

    document.getElementById("world").style.display = "block";

}


function openBench() {

    document.getElementById("forest-message").style.display = "block";

}


function closeBench() {

    document.getElementById("forest-message").style.display = "none";

}function openOcean() {

    document.getElementById("world").style.display = "none";

    document.getElementById("ocean-screen").style.display = "block";

}


function closeOcean() {

    document.getElementById("ocean-screen").style.display = "none";

    document.getElementById("world").style.display = "block";

}
function openOcean() {

    document.getElementById("world").style.display = "none";

    document.getElementById("ocean-screen").style.display = "block";

}


function closeOcean() {

    document.getElementById("ocean-screen").style.display = "none";

    document.getElementById("world").style.display = "block";

}
