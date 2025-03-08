document.addEventListener("DOMContentLoaded", function () {
    const feelingBoxes = document.querySelectorAll(".feeling-box");

    feelingBoxes.forEach(box => {
        box.addEventListener("click", function () {
            let i = 0;
            const element = this; // Store reference to clicked element

            // Clear any existing animation before starting a new one
            clearInterval(element.shakeInterval);

            element.shakeInterval = setInterval(() => {
                const offsetX = (Math.random() - 0.5) * 10; // Increased shake range
                const offsetY = (Math.random() - 0.5) * 10;
                const rotate = (Math.random() - 0.5) * 5; // More noticeable rotation

                element.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg)`;

                i++;
                if (i > 10) { 
                    clearInterval(element.shakeInterval);
                    element.style.transform = "translate(0, 0) rotate(0deg)"; // Reset after shaking
                }
            }, 50); // Adjusted timing for smoother effect
        });
    });
});



let emotion = 0; // ranges from 1-4, 0 if unselected
let place = 0; // ranges from 1-4, 0 if unselected

function handleFeelings(num) {
    let div = document.getElementById('next-btn');
    let card = document.getElementById('e' + num);

    if (emotion == 0) {
        // cards unselected
        emotion = num;
        div.classList.remove('disabled');
        card.classList.add('selected');
    } else if (emotion == num) {
        // card already selected
        emotion = 0;
        div.classList.add('disabled');
        card.classList.remove('selected');
    } else {
        // selecting another card
        document.getElementById('e' + emotion).classList.remove('selected');
        emotion = num;
        card.classList.add('selected');
    }
    console.log('clicked emotion:' + num);
}

function handlePlaces(num) {
    let div = document.getElementById('last-button');
    let card = document.getElementById('p' + num);

    if (place == 0) {
        // cards unselected
        place = num;
        div.classList.remove('disabled');
        card.classList.add('selected');
    } else if (place == num) {
        // card already selected
        place = 0;
        div.classList.add('disabled');
        card.classList.remove('selected');
    } else {
        // selecting another card
        document.getElementById('p' + place).classList.remove('selected');
        place = num;
        card.classList.add('selected');
    }
    console.log('clicked place:' + num);
}

function handleNext() {
    if (emotion == 0) {
        alert('Please select an emotion');
    } else {
        console.log("clicked next");
        let feelings = document.getElementById('feelings');
        feelings.style.display = 'none';
        let places = document.getElementById('places');
        places.style.display = 'block';
    }
}

const emotionsDict = {
    1: 'calm',
    2: 'sadness',
    3: 'anxiety',
    4: 'hope',
};
const placesDict = {
    1: 'seaside',
    2: 'city',
    3: 'rainforest',
    4: 'valley',
};
function handleFinal() {
    if (emotion == 0 || place == 0) {
        alert('Please select your emotion and place first');
    } else {
        window.location.href = emotionsDict[emotion] + "_" + placesDict[place] + ".html";
    }
}
