function enterWorld() {

    const intro = document.getElementById("intro");

    intro.classList.add("hidden");

}


function openPlace(place) {

    const popup = document.getElementById("popup");

    const title = document.getElementById("popup-title");

    const text = document.getElementById("popup-text");


    if (place === "home") {

        title.textContent = "HOME";

        text.textContent =
            "A place for all the things I wish I could tell you in person.";

    }


    if (place === "forest") {

        title.textContent = "THE FOREST";

        text.textContent =
            "Somewhere in here are memories I never want to forget.";

    }


    if (place === "ocean") {

        title.textContent = "THE OCEAN";

        text.textContent =
            "There are things floating around here that I've never said enough.";

    }


    if (place === "observatory") {

        title.textContent = "OBSERVATORY";

        text.textContent =
            "Look closely. Some of the stars are made from our memories.";

    }


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
