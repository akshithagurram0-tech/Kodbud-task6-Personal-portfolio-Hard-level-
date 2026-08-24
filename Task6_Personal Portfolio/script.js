function speakWelcome() {

    window.speechSynthesis.cancel();

    setTimeout(() => {

        const message = new SpeechSynthesisUtterance(
            "Hello! Welcome to my portfolio. I am Gurram Akshitha, a Computer Science Engineering student and an aspiring Full Stack Developer."
        );

        message.lang = "en-US";
        message.rate = 0.9;
        message.pitch = 1;

        window.speechSynthesis.speak(message);

    }, 300);

}
function speakWelcome() {

    speechSynthesis.cancel();

    const message = new SpeechSynthesisUtterance(
        "Hello! Welcome to my portfolio. I am Gurram Akshitha, a Computer Science Engineering student and an aspiring Full Stack Developer. I have skills in Java, Python, Web Development and I love building real world projects. Please explore my skills, projects and achievements. Thank you for visiting my portfolio."
    );


    message.lang = "en-US";
    message.rate = 0.9;
    message.pitch = 1;
    message.volume = 1;


    let voices = speechSynthesis.getVoices();


    let femaleVoice = voices.find(voice =>
        voice.name.includes("Zira") ||
        voice.name.includes("Jenny") ||
        voice.name.includes("Female")
    );


    if (femaleVoice) {
        message.voice = femaleVoice;
    }


    speechSynthesis.speak(message);

}


window.addEventListener("load", function () {

    if ("speechSynthesis" in window) {


        setTimeout(() => {

            let voices = speechSynthesis.getVoices();


            if (voices.length > 0) {

                speakWelcome();

            } 
            else {

                speechSynthesis.onvoiceschanged = function () {

                    speakWelcome();

                };

            }


        }, 1500);


    }

});

const words = [

    "Aspiring Full Stack Developer",
    "Frontend Developer",
    "Java Programmer",
    "Python Learner"

];


let wordIndex = 0;
let charIndex = 0;


const typing = document.getElementById("typing");



function typeEffect() {


    if (!typing) return;


    if (charIndex < words[wordIndex].length) {


        typing.innerHTML += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,120);


    } 
    else {


        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){


    if (!typing) return;


    if(charIndex > 0){


        typing.innerHTML = words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,60);


    }
    else{


        wordIndex++;


        if(wordIndex >= words.length){

            wordIndex = 0;

        }


        setTimeout(typeEffect,300);

    }

}



typeEffect();

document.querySelectorAll("nav a").forEach(link => {


    link.addEventListener("click", function(e){


        e.preventDefault();


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});