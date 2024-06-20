// the dates
const datesList = [
    "Jan 2024",
    "Feb 2024",
    "Mar 2024",
    "Apr 2024",
    "May 2024",
    "Jun 2024",
    "Jul 2024",
    "Aug 2024",
    "Sep 2024",
    "Oct 2024",
    "Nov 2024",
    "Dec 2024"
];

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

//bubble creating function
function createBubble(date, delay) {
    setTimeout(() => {

        //creates the div
        const bubble = document.createElement('div');
        
        //adds date to div
        bubble.textContent = date;

        //adds css to dic
        bubble.classList.add('bubble');

        //bubble x-coordinate
        bubble.style.left = `${getRandomNumber(0, window.innerWidth - 30)}px`;
        
        //stagering bubbles
        bubble.style.bottom = `${0}px`; // Start bubbles off-screen
        
        //adding bubble to the background
        document.querySelector('.background').appendChild(bubble);

        // animating bubble
        animateBubble(bubble);

    }, delay); //delaying bubbles
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
    var speed = getRandomNumber(1, 3);

    //bubble animation loop
    const interval = setInterval(() => {

        //the bubble current y-coordinate
        const currentBottom = parseInt(bubble.style.bottom);
        if (currentBottom >= window.innerHeight) {
            resetBubblePosition(bubble); //resets bubble's x-coordinate once it floats up once
            speed  = getRandomNumber(1, 3);
        } else {
            bubble.style.bottom = `${currentBottom + speed}px`; //moves bubble
        }
    }, 10); //time b/w movement
}

//initizlizes array of bubbles
shuffleArray(datesList).forEach((date, index) => {
    
    //calcs delay for bubble
    const delay = index * 1000;

    //creates bubble
    createBubble(date, delay);
});