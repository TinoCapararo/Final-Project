let emotion = 0; // Variable to track selected emotion (1-4), 0 if unselected
let place = 0; // Variable to track selected place (1-4), 0 if unselected

// Function to handle emotion selection
function handleFeelings(num) {
    let div = document.getElementById('next-btn'); // Get the next button element
    let card = document.getElementById('e' + num); // Get the selected emotion card

    if (emotion == 0) {
        // If no emotion is selected, set the selected emotion
        emotion = num;
        div.classList.remove('disabled'); // Enable the next button
        card.classList.add('selected'); // Highlight the selected card
    } else if (emotion == num) {
        // In case the same card is selected again, deselect it
        emotion = 0;
        div.classList.add('disabled'); // Disable the next button
        card.classList.remove('selected'); // Remove highlight from the card
    } else {
        // In case a different card is selected, this function update the selection
        document.getElementById('e' + emotion).classList.remove('selected'); // Deselect the previously selected card
        emotion = num; 
        card.classList.add('selected'); 
    }
    console.log('clicked emotion:' + num); // Log the selected emotion
}

// Function for place selection
function handlePlaces(num) {
    let div = document.getElementById('last-button'); 
    let card = document.getElementById('p' + num); 

    if (place == 0) {
       
        place = num;
        div.classList.remove('disabled'); 
        card.classList.add('selected'); 
    } else if (place == num) {
        
        place = 0;
        div.classList.add('disabled'); 
        card.classList.remove('selected'); 
    } else {
        // If a different card is picked, update the selection
        document.getElementById('p' + place).classList.remove('selected'); // Deselect the previously selected card
        place = num; // Update the chosen place
        card.classList.add('selected'); 
    }
    console.log('clicked place:' + num); // Log the selected place
}

// Function to handle the next step after choosing emotion and place
function handleNext() {
    if (emotion == 0) {
        alert('Please select an emotion'); 
    } else {
        console.log("clicked next"); // Log the next button click
        let feelings = document.getElementById('feelings');
        feelings.style.display = 'none'; // Hide the feelings section
        let places = document.getElementById('places');
        places.style.display = 'block'; // Show the places section
    }
}

// Dictionary mapping emotion numbers to their names
const emotionsDict = {
    1: 'calm',
    2: 'sadness',
    3: 'anxiety',
    4: 'hope',
};

// Dictionary mapping place numbers to their names
const placesDict = {
    1: 'seaside',
    2: 'city',
    3: 'rainforest',
    4: 'valley',
};

// Function to handle the final selection and redirect to the corresponding page
function handleFinal() {
    if (emotion == 0 || place == 0) {
        alert('Please select your emotion and place first'); // Alert if either selection is missing
    } else {
        // Redirect to the corresponding HTML page based on selections
        window.location.href = emotionsDict[emotion] + "_" + placesDict[place] + ".html";
    }
}