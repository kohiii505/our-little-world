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
