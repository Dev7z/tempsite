// Get all the elements with ids 1 to 11
const elements = [];
for (let i = 1; i <= 11; i++) {
    const element = document.getElementById(String(i));
    elements.push(element);
}
const Belements = [];
for (let i = 11; i >= 1; i--) {
    const element = document.getElementById(String(i));
    Belements.push(element);
}

let cc = 0;

// Function to capitalize an element and lowercase the previous element
function capitalizeElement(element, previousElement) {
    const text = element.innerText;
    element.innerText = text.toUpperCase();
    
    if (previousElement) {
        const previousText = previousElement.innerText;
        previousElement.innerText = previousText.toLowerCase();
    }
}

// Function to animate the capitalization of elements
async function animateCapitalization() {
    if(cc % 2 == 0){
        Ielements = elements;
    } else {
        Ielements = Belements;
    }
    let index = 0;
    while (index < Ielements.length) {
        await new Promise(resolve => {
            setTimeout(() => {
                capitalizeElement(Ielements[index], Ielements[index - 1]);
                index++;
                resolve();
            }, 225); // Change the interval (in milliseconds) to adjust the speed of animation
        });
    }
    cc++;
    animateCapitalization();
}

animateCapitalization();


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeTitle() {
    await delay(225);
    document.title = 'I am ready';
    await delay(225);
    document.title = 'i Am ready';
    await delay(225);
    document.title = 'i aM ready';
    await delay(225);
    document.title = 'i am Ready';
    await delay(225);
    document.title = 'i am rEady';
    await delay(225);
    document.title = 'i am reAdy';
    await delay(225);
    document.title = 'i am reaDy';
    await delay(225);
    document.title = 'i am readY';
    await delay(225);
    document.title = 'i am reaDy';
    await delay(225);
    document.title = 'i am reAdy';
    await delay(225);
    document.title = 'i am rEady';
    await delay(225);
    document.title = 'i am Ready';
    await delay(225);
    document.title = 'i aM ready';
    await delay(225);
    document.title = 'i Am ready';
    changeTitle();
}

changeTitle();

let dd = 0;
const elementToHide = document.getElementById('simple-cookie-consent');

document.addEventListener('click', () => {
    if(dd == 0){ 
        if (elementToHide) {
            elementToHide.style.display = 'none';
        }
        const audio = new Audio('AreYouReady.mp3');
        audio.loop = true;
        audio.volume = 1.0;
        audio.play();
        dd++;
    }
});
