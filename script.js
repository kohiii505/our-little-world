/* =====================================================
   INTRO
===================================================== */

function enterWorld() {

    const intro = document.getElementById("intro");

    intro.classList.add("hidden");
}


/* =====================================================
   HOME
===================================================== */

function openHome() {

    document.getElementById("world").style.display = "none";

    document.getElementById("home-letter").style.display = "block";
}

function closeHome() {

    document.getElementById("letter-content").style.display = "none";

    document.getElementById("home-letter").style.display = "none";

    document.getElementById("world").style.display = "block";
}

function openLetter() {

    document.getElementById("letter-content").style.display = "block";
}

function closeLetter() {

    document.getElementById("letter-content").style.display = "none";
}


/* =====================================================
   FOREST
===================================================== */

function openForest() {

    document.getElementById("world").style.display = "none";

    document.getElementById("forest-screen").style.display = "block";
}

function closeForest() {

    document.getElementById("forest-message").style.display = "none";

    document.getElementById("forest-screen").style.display = "none";

    document.getElementById("world").style.display = "block";
}

function openBench() {

    document.getElementById("forest-message").style.display = "block";
}

function closeBench() {

    document.getElementById("forest-message").style.display = "none";
}


/* =====================================================
   🌊 OCEAN
===================================================== */

let oceanFound = 0;

const oceanMessages = {

    first: {
        title: "A little first.",
        text:
            "There are so many firsts we've had together. Somehow, even the smallest ones became memories I wanted to keep."
    },

    memory: {
        title: "A memory.",
        text:
            "Some moments are tiny when they happen, but become huge when you look back at them."
    },

    love: {
        title: "Something I love.",
        text:
            "I love the way you can make ordinary moments feel like they belong to just us."
    },

    future: {
        title: "Something ahead.",
        text:
            "There are still so many things we haven't done yet. I can't wait to find them with you."
    },

    little: {
        title: "A little thing.",
        text:
            "It's the little things that get me the most. The jokes, the random messages, the tiny moments I end up remembering forever."
    }

};


function openOcean() {

    document.getElementById("world").style.display = "none";

    document.getElementById("ocean-screen").style.display = "block";

}


function closeOcean() {

    document.getElementById("ocean-message").style.display = "none";

    document.getElementById("ocean-complete").style.display = "none";

    document.getElementById("ocean-screen").style.display = "none";

    document.getElementById("world").style.display = "block";

}


function collectOceanItem(element, type) {

    if (element.dataset.collected === "true") {
        return;
    }

    element.dataset.collected = "true";

    element.style.opacity = "0";

    element.style.transform = "scale(0.2)";

    oceanFound++;

    document.getElementById("ocean-count").textContent =
        oceanFound;


    const message = oceanMessages[type];

    document.getElementById("ocean-message-title").textContent =
        message.title;

    document.getElementById("ocean-message-text").textContent =
        message.text;

    document.getElementById("ocean-message").style.display =
        "block";


    if (oceanFound === 5) {

        setTimeout(function() {

            document.getElementById("ocean-message").style.display =
                "none";

            document.getElementById("ocean-complete").style.display =
                "block";

        }, 1300);

    }

}


function closeOceanMessage() {

    document.getElementById("ocean-message").style.display =
        "none";

}


/* =====================================================
   🔭 OBSERVATORY
===================================================== */

let starsFound = 0;

const starMessages = {

    one: {
        title: "The quiet star.",
        text:
            "Some of my favorite moments with you aren't the huge ones. They're the quiet little moments that only we notice."
    },

    two: {
        title: "The bright star.",
        text:
            "You have this annoying little habit of making my entire day better without even trying."
    },

    three: {
        title: "The distant star.",
        text:
            "Even when we're far apart, you're still somehow one of the closest people to me."
    },

    four: {
        title: "The one I kept.",
        text:
            "If I could keep one thing from every moment we've had, I'd probably keep the feeling of being with you."
    }

};


function openObservatory() {

    document.getElementById("world").style.display = "none";

    document.getElementById("observatory-screen").style.display =
        "block";

}


function closeObservatory() {

    document.getElementById("observatory-message").style.display =
        "none";

    document.getElementById("observatory-complete").style.display =
        "none";

    document.getElementById("observatory-screen").style.display =
        "none";

    document.getElementById("world").style.display = "block";

}


function findStar(element, type) {

    if (element.dataset.found === "true") {
        return;
    }

    element.dataset.found = "true";

    element.style.opacity = "0";

    element.style.transform = "scale(0.2)";

    starsFound++;

    document.getElementById("star-count").textContent =
        starsFound;


    const message = starMessages[type];

    document.getElementById("star-message-title").textContent =
        message.title;

    document.getElementById("star-message-text").textContent =
        message.text;

    document.getElementById("observatory-message").style.display =
        "block";


    /* Build the constellation */

    if (starsFound >= 1) {

        document.querySelector(".line-one").style.opacity = "1";

    }

    if (starsFound >= 2) {

        document.querySelector(".line-two").style.opacity = "1";

    }

    if (starsFound >= 3) {

        document.querySelector(".line-three").style.opacity = "1";

    }


    /* All stars found */

    if (starsFound === 4) {

        setTimeout(function() {

            document.getElementById("observatory-message").style.display =
                "none";

            document.getElementById("observatory-complete").style.display =
                "block";

        }, 1300);

    }

}


function closeObservatoryMessage() {

    document.getElementById("observatory-message").style.display =
        "none";

}


/* =====================================================
   MYSTERY / FUTURE
===================================================== */

function openMystery() {

    document.getElementById("world").style.display = "none";

    document.getElementById("mystery-screen").style.display =
        "block";
}


function closeMystery() {

    document.getElementById("future-message").style.display =
        "none";

    document.getElementById("mystery-screen").style.display =
        "none";

    document.getElementById("world").style.display = "block";
}


function revealFuture() {

    const future = document.getElementById("future-message");

    future.style.display = "block";

    const button = document.querySelector(".mystery-button");

    button.style.display = "none";
}
