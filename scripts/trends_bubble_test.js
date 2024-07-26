// function isCollide(a, bubbles) {
//     // Check if bubbles array is empty
//     if (bubbles.length === 0) {
//         return false; // No bubbles to collide with
//     }

//     // Loop through each bubble in the array
//     for (const b of bubbles) {
//         // Check for collision with the current bubble
//         if (
//             !(
//                 ((a.y + a.height) < b.y) ||
//                 (a.y > (b.y + b.height)) ||
//                 ((a.x + a.width) < b.x) ||
//                 (a.x > (b.x + b.width))
//             )
//         ) {
//             return true; // Collision detected
//         }
//     }

//     // No collisions found
//     return false;
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const bubbles = [];
//     const maxRetries = 100; // Maximum number of retry attempts

//     function createBubble() {
//         let retryCount = 0;
//         let bubbleCreated = false;

//         while (retryCount < maxRetries && !bubbleCreated) {
//             const bubble = document.createElement('div');
//             bubble.className = 'bubble-trends';
//             bubble.innerHTML = 2024;

//             // Set random position
//             bubble.style.position = 'absolute';
//             bubble.style.width = '100px'; // Example width
//             bubble.style.height = '100px'; // Example height
//             const bubbleWidth = parseInt(bubble.style.width, 10);
//             const bubbleHeight = parseInt(bubble.style.height, 10);
//             bubble.style.left = Math.floor(Math.random() * (window.innerWidth - bubbleWidth)) + 'px';
//             bubble.style.top = Math.floor(Math.random() * (window.innerHeight - bubbleHeight)) + 'px';

//             // Convert styles to numbers
//             const x = parseInt(bubble.style.left, 10);
//             const y = parseInt(bubble.style.top, 10);
//             const width = bubbleWidth;
//             const height = bubbleHeight;

//             const bubbleObject = { x, y, width, height };

//             // Check for collision
//             if (!isCollide(bubbleObject, bubbles)) {
//                 // Append bubble to DOM and add to bubbles array
//                 document.getElementById('bubbles').appendChild(bubble);
//                 bubbles.push(bubbleObject);
//                 bubbleCreated = true;
//             } else {
//                 retryCount++;
//             }
//         }

//         if (retryCount >= maxRetries) {
//             console.warn('Max retries reached while creating a bubble. Consider adjusting the size or number of bubbles.');
//         }
//     }

//     // Call the function to create the first bubble
//     createBubble();
//     createBubble();
//     createBubble();
//     createBubble();
//     createBubble();
//     createBubble();
// });

function isCollide(a, bubbles) {
    // Check if bubbles array is empty
    if (bubbles.length === 0) {
        return false; // No bubbles to collide with
    }

    // Loop through each bubble in the array
    for (const b of bubbles) {
        // Check for collision with the current bubble
        if (
            !(
                ((a.y + a.height) < b.y) ||
                (a.y > (b.y + b.height)) ||
                ((a.x + a.width) < b.x) ||
                (a.x > (b.x + b.width))
            )
        ) {
            return true; // Collision detected
        }
    }

    // No collisions found
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const bubbles = [];
    const maxRetries = 100; // Maximum number of retry attempts

    function createBubble() {
        let retryCount = 0;
        let bubbleCreated = false;

        while (retryCount < maxRetries && !bubbleCreated) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble-trends';
            bubble.innerHTML = 2024;

            // Set random position
            bubble.style.position = 'absolute';
            bubble.style.width = '50px'; // Example width
            bubble.style.height = '50px'; // Example height
            const bubbleWidth = parseInt(bubble.style.width, 10);
            const bubbleHeight = parseInt(bubble.style.height, 10);
            bubble.style.left = Math.floor(Math.random() * (window.innerWidth - bubbleWidth)) + 'px';
            bubble.style.top = Math.floor(Math.random() * (window.innerHeight - bubbleHeight)) + 'px';

            // Convert styles to numbers
            const x = parseInt(bubble.style.left, 10);
            const y = parseInt(bubble.style.top, 10);
            const width = bubbleWidth;
            const height = bubbleHeight;

            const bubbleObject = { x, y, width, height };

            // Check for collision
            if (!isCollide(bubbleObject, bubbles)) {
                // Create and configure tooltip
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.innerHTML = 'Bubble Info'; // Customize this with your info
                bubble.appendChild(tooltip);

                // Add event listeners for tooltip
                bubble.addEventListener('mouseover', (event) => {
                    tooltip.style.display = 'block';
                    console.log('works');
                    tooltip.style.left = (event.pageX + 10) + 'px';
                    tooltip.style.top = (event.pageY + 10) + 'px';
                });

                bubble.addEventListener('mousemove', (event) => {
                    tooltip.style.left = (event.pageX + 10) + 'px';
                    tooltip.style.top = (event.pageY + 10) + 'px';
                    console.log('chicken');
                });

                bubble.addEventListener('mouseout', () => {
                    tooltip.style.display = 'none';
                    console.log('tum');
                });

                // Append bubble to DOM and add to bubbles array
                document.getElementById('bubbles').appendChild(bubble);
                bubbles.push(bubbleObject);
                bubbleCreated = true;
            } else {
                retryCount++;
            }
        }

        if (retryCount >= maxRetries) {
            console.warn('Max retries reached while creating a bubble. Consider adjusting the size or number of bubbles.');
        }
    }

    // Call the function to create the first bubble
    createBubble();
});
