
/* ################################################################################################################################ */
/* ################################################################################################################################ */
/* ########################################################## HOME PAGE ########################################################### */
/* ################################################################################################################################ */
/* ################################################################################################################################ */

// the dates
const allpossDates = [];

//initializing the months
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

//initializing the years
const years = []
const currentYear = new Date().getFullYear();
for (var i = currentYear; i < currentYear + 50; i++) {
    years.push(i);
}

//filling in the possible dates
for (var i = 0; i < years.length; i++) {
    for (var j = 0; j < 12; j++) {
        allpossDates.push(months[j]+" "+years[i]);
    }
}

//randomizing array function
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { 
   
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
 }

//random num generator function
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

var activeBubs = 0;

//bubble creating function
function createBubble() {
    setTimeout(() => {

        //creates the div
        const bubble = document.createElement('bubble');

        
        //adds date to div
        bubble.textContent = allpossDates[Math.floor(Math.random()*allpossDates.length)];

        //adds css to dic
        bubble.classList.add('bubble');

        //bubble x-coordinate
        bubble.style.left = `${getRandomNumber(0, window.innerWidth - 30)}px`;
        
        //stagering bubbles
        bubble.style.bottom = `${getRandomNumber(-30, -300)}px`; // Start bubbles off-screen
        
        //adding bubble to the background
        document.querySelector('.background').appendChild(bubble);

        // animating bubble
        animateBubble(bubble);


    }, 1000); //delaying bubbles
}

//reset bubble x-coordinate
 function resetBubblePosition(bubble) {

    //stagering bubbles

    bubble.style.bottom = `${0}px`; 

    //randomizing the x-coordinate
    bubble.style.left = `${getRandomNumber(0, window.innerWidth - 30)}px`;
}

//animating the bubble
function animateBubble(bubble) {

    //getting speed value
    var speed = getRandomNumber(1, 5);

    //bubble animation loop
    const interval = setInterval(() => {

        //the bubble current y-coordinate
        const currentBottom = parseInt(bubble.style.bottom);
        if (currentBottom >= window.innerHeight) {
            resetBubblePosition(bubble); //resets bubble's x-coordinate once it floats up once
            if (activeBubs > 0) { 
                activeBubs--;
                speed  = getRandomNumber(1, 5);
            }
        } else {
            if (currentBottom > 0 && currentBottom < speed) {
                activeBubs++;
            }
            bubble.style.bottom = `${currentBottom + speed}px`; //moves bubble
        }
    }, 10); //time b/w movement
}


for (i = 0; i < 15; i++) {
    createBubble();
}


