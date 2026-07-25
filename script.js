// =========================
// Birthday Countdown
// =========================

const birthday = new Date("August 9, 2026 00:00:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = birthday - now;


    if (distance <= 0) {

        clearInterval(timer);

        document.getElementById("countdown").innerHTML =
            "🎂 Happy Birthday My Love ❤️";

        return;

    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("countdown").innerHTML =

        `${days} Days ❤️ 
        ${hours} Hours ❤️ 
        ${minutes} Minutes ❤️ 
        ${seconds} Seconds`;


},1000);




// =========================
// Surprise Message
// =========================


function showMessage(){

    document.getElementById("message").innerHTML = `

    ❤️ Happy Birthday My Love ❤️
    <br><br>

    You are the best deployment life has ever given me.

    <br><br>

    May your dreams always build successfully,
    your happiness never crash,
    and our love always stay in production forever.

    <br><br>

    Thank you for being my husband,
    my best friend, and my biggest support.

    <br><br>

    🚀 Final Status:
    <br>
    ❤️ LOVE DEPLOYED SUCCESSFULLY ❤️

    `;


    createConfetti();

}





// =========================
// Confetti Animation
// =========================


function createConfetti(){


    for(let i=0;i<120;i++){


        const confetti =
        document.createElement("div");


        confetti.className="confetti";


        confetti.style.left =
        Math.random()*100 + "vw";


        confetti.style.backgroundColor =
        randomColor();


        confetti.style.animationDuration =
        (Math.random()*3+2)+"s";


        document.body.appendChild(confetti);



        setTimeout(()=>{

            confetti.remove();

        },5000);


    }

}



function randomColor(){

    const colors=[

        "#ff5c8d",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ffffff"

    ];

    return colors[
        Math.floor(Math.random()*colors.length)
    ];

}
