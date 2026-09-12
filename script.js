function enterWorld() {
    document.getElementById("intro").classList.add("hidden");
}


/* HOME */

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


/* FOREST */

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


/* OCEAN */

function openOcean() {
    document.getElementById("world").style.display = "none";
    document.getElementById("ocean-screen").style.display = "block";
}

function closeOcean() {
    document.getElementById("ocean-screen").style.display = "none";
    document.getElementById("world").style.display = "block";
}


/* OBSERVATORY */

function openObservatory() {
    document.getElementById("world").style.display = "none";
    document.getElementById("observatory-screen").style.display = "block";
}

function closeObservatory() {
    document.getElementById("observatory-screen").style.display = "none";
    document.getElementById("world").style.display = "block";
}


/* MYSTERY */

function openMystery() {
    document.getElementById("world").style.display = "none";
    document.getElementById("mystery-screen").style.display = "block";
}

function closeMystery() {
    document.getElementById("mystery-screen").style.display = "none";
    document.getElementById("world").style.display = "block";
}
