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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { 
   
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
 }

// Function to generate a random number between min and max inclusive
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a bubble element with a delay
function createBubbleWithDelay(date, delay) {
    setTimeout(() => {
        const bubble = document.createElement('div');
        bubble.textContent = date;
        bubble.classList.add('bubble');
        bubble.style.left = `${getRandomNumber(0, window.innerWidth - 30)}px`;
        bubble.style.bottom = `${getRandomNumber(-30, -300)}px`; // Start bubbles off-screen
        document.querySelector('.background').appendChild(bubble);

        // After adding bubble, start animation
        animateBubble(bubble);
    }, delay);
}

// Function to animate a single bubble moving up
function animateBubble(bubble) {
    const speed = getRandomNumber(1, 3); // Randomize speed
    const interval = setInterval(() => {
        const currentBottom = parseInt(bubble.style.bottom);
        if (currentBottom >= window.innerHeight) {
            bubble.style.bottom = `${getRandomNumber(-30, -300)}px`; // Reset bubble position off-screen
        } else {
            bubble.style.bottom = `${currentBottom + speed}px`;
        }
    }, 10); // Adjust animation smoothness
}

// Initialize bubbles with staggered delays
shuffleArray(datesList).forEach((date, index) => {
    // Calculate delay for each bubble (adjust as needed)
    const delay = index * 1000; // 1000 milliseconds = 1 second
    createBubbleWithDelay(date, delay);
});