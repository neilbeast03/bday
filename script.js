const finalLetter = `A lot of things changed, but anyways-
might be the last time imma call you twin, anyways Enjoy your bday!! cya

Happy 15th Birthday, twin! ❤️`;

const terminal = document.getElementById("terminal");
terminal.innerHTML = "";

const lines = [
    "Initializing Birthday Protocol...",
    "",
    "Loading Friendship Database...",
    "",
    "Scanning Memories...",
    "",
    "Searching for Birthday Girl...",
    "",
    "Human Detected ✓",
    "",
    "Running AI Analysis...",
    "",
    "Name .............. Nanisha",
    "Age ............... 15",
    "Friendship ........ 5+ Years",
    "",
    "Kindness .......... ██████████ 100%",
    "Humor ............. ██████████ 100%",
    "Patience .......... ░░░░░░░░░░ 1%",
    "Drama Level ....... ∞",
    "Meme Skills ....... ELITE",
    "",
    "Best Friend Status.",
    "████████████████ VERIFIED ✓",
    "",
    "ACCESS GRANTED "
];

let line = 0;
let char = 0;

function type() {
    if (line >= lines.length) {

    setTimeout(() => {

        document.getElementById("terminal").style.display = "none";
        document.getElementById("birthday").style.display = "flex";

    }, 1000);

    return;
}

    if (char < lines[line].length) {
        terminal.innerHTML += lines[line].charAt(char);
        char++;
        setTimeout(type, 35);
    } else {
        terminal.innerHTML += "<br>";
        line++;
        char = 0;
        setTimeout(type, 350);
    }
}

type();

const photos = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
];

const captions = [
    "Case File #1: aloo khalo.",
    "Exhibit #2: SATAN!",
    "Criminal Record #3: Merry Christmas lOl",
    "Government Leak #4: Merry Christmas CHONGU HAHAHA.",
    "FBI Archive #5: Awwwww........",
    "Restricted File #6: my dream eye eye tee bombay",
    "Top Secret Image #7: chico who?",
    "Final Evidence: lol kya caption daalu iske liye"
];

let current = 0;

const startBtn = document.getElementById("startBtn");
const evidence = document.getElementById("evidence");
const nextBtn = document.getElementById("nextBtn");

startBtn.onclick = function(){document.getElementById("bgMusic").play();

    startBtn.style.display="none";

    evidence.style.display="block";

    showEvidence();

};

function showEvidence(){

    document.getElementById("photo").src = photos[current];

    document.getElementById("caption").textContent = captions[current];

    document.getElementById("evidenceTitle").textContent =
        "Evidence #" + (current+1);

}

nextBtn.onclick=function(){

    current++;

  if(current>=photos.length){

    document.getElementById("evidence").style.display="none";
    document.getElementById("letter").style.display="block";
    typeWriter(finalLetter, "letterText", 30);

    
    confetti({
    particleCount: 250,
    spread: 180,
    origin: { y: 0.6 }
});

    return;
}

       showEvidence();

};

function typeWriter(text, elementId, speed = 35) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = "";

    function type() {
        if (i < text.length) {
            if (text.charAt(i) === "\n") {
                element.innerHTML += "<br>";
            } else {
                element.innerHTML += text.charAt(i);
            }

            i++;
            setTimeout(type, speed);

        } else {

            const music = document.getElementById("bgMusic");

            let fade = setInterval(() => {
                if (music.volume > 0.05) {
                    music.volume -= 0.05;
                } else {
                    music.volume = 0;
                    music.pause();
                    music.currentTime = 0;
                    clearInterval(fade);
                }
            }, 200);
        }
    }

    type();
}
    