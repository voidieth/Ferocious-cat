const messages = [
    "Are you sure?",
    "Really sure?? :(",
    "Are you positive?",
    "UH, please..",
    "Just think about it..",
    "If you say no, I will be really sad..",
    "I will be very sad...",
    "I will be very very very sad...",
    "Okay, fine.. I will stop asking..",
    "Sike, say yes please!!!!"
];

let messageIndex = 0;
let noClicks = 0;
const yesButton = document.querySelector('.yes-button'); 

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    noClicks++; 
    if (noClicks >= 10){
        yesButton.removeAttribute('disabled'); 
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}