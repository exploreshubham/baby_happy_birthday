/* =====================================
   PAGE SYSTEM
===================================== */

let currentPage = 1;

const totalPages = 8;


function showPage(pageNumber) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove(
                "active"
            );

        });


    const page =
        document.getElementById(
            "page" + pageNumber
        );


    if (page) {

        page.classList.add(
            "active"
        );

    }


    currentPage = pageNumber;

}


/* =====================================
   NEXT PAGE
===================================== */

function nextPage() {

    if (currentPage < totalPages) {

        showPage(
            currentPage + 1
        );

    }

}


/* =====================================
   MUSIC
===================================== */

function playMusic() {

    const music =
        document.getElementById(
            "birthdayMusic"
        );


    music
        .play()
        .then(() => {

            console.log(
                "Birthday music started"
            );

        })
        .catch(error => {

            console.log(
                "Music could not autoplay:",
                error
            );

        });


    nextPage();

}


/* =====================================
   FINAL PAGE
===================================== */

function showFinal() {

    showPage(8);

    createCelebration();

}


/* =====================================
   RESTART
===================================== */

function restart() {

    const music =
        document.getElementById(
            "birthdayMusic"
        );


    music.pause();

    music.currentTime = 0;


    showPage(1);

}


/* =====================================
   FLOATING PARTICLES
===================================== */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "particle";


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.animationDuration =
            (
                5 +
                Math.random() * 10
            ) + "s";


        particle.style.animationDelay =
            (
                Math.random() * 8
            ) + "s";


        particle.style.opacity =
            Math.random();


        const size =
            2 +
            Math.random() * 4;


        particle.style.width =
            size + "px";


        particle.style.height =
            size + "px";


        container.appendChild(
            particle
        );

    }

}


/* =====================================
   CELEBRATION
===================================== */

function createCelebration() {

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        createFloatingHeart();

    }

}


function createFloatingHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.innerHTML = "❤️";


    heart.style.position =
        "fixed";


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.bottom =
        "-40px";


    heart.style.fontSize =
        (
            15 +
            Math.random() * 30
        ) + "px";


    heart.style.zIndex = "20";


    heart.style.pointerEvents =
        "none";


    heart.style.transition =
        "transform 5s linear, opacity 5s";


    document.body.appendChild(
        heart
    );


    setTimeout(() => {

        heart.style.transform =
            `translateY(-110vh)
             rotate(
                ${Math.random() * 360}deg
             )`;

        heart.style.opacity = "0";

    }, 50);


    setTimeout(() => {

        heart.remove();

    }, 5500);

}


/* =====================================
   INITIALIZE
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createParticles();

        showPage(1);

    }
);


/* =====================================
   KEYBOARD SUPPORT
===================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            if (
                currentPage !== 4 &&
                currentPage < 7
            ) {

                nextPage();

            }

        }

    }
);