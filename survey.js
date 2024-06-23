var pages = ['main', 'age', 'location', 'occupation', 'education'];

function next(id) {
    var page = document.getElementById(id);
    var nextPage;

    page.classList.add('go-left');
    
    setTimeout(function() {
        page.classList.remove('active');
        page.classList.remove('go-left');
    }, 250);

    for (var i = 0; i < pages.length; i++) {
        if (pages[i] === id) {
            nextPage = document.getElementById(pages[i + 1]);
            break;
        }
    }

    nextPage.classList.add('go-right', 'active');

    setTimeout(function() {
        nextPage.classList.remove('go-right');
        nextPage.classList.add('fade-in');
    }, 500);

    setTimeout(function() {
        nextPage.classList.remove('fade-in');
    }, 1000);
}

//there is some weird stuff going on here but it works don't mess with it
function back(id) {
    var page = document.getElementById(id);
    var prevPage;

    // Fade out current page to the right
    page.classList.add('go-right');


    setTimeout(function() {
        page.classList.remove('active');
        page.classList.remove('go-right');
        prevPage.classList.add('go-left', 'active');
    }, 250);

    // Find previous page
    for (var i = 0; i < pages.length; i++) {
        if (pages[i] === id) {
            prevPage = document.getElementById(pages[i - 1]);
            break;
        }
    }

    setTimeout(function() {
        prevPage.classList.remove('go-left');
        prevPage.classList.add('fade-in');
    }, 500);

    setTimeout(function() {
        prevPage.classList.remove('fade-in');
    }, 1000);
}

var buttonsAge = ['age1', 'age2', 'age3', 'age4', 'age5', 'age6', 'age7']

function select(evt) {
    var buttonPressed = evt.currentTarget;
    
    // Remove 'active' class from all buttons
    for (var i = 0; i < buttonsAge.length; i++) {
        var button = document.getElementById(buttonsAge[i])

        if (button) {
            button.classList.remove('active')
        }
    }
    // Add 'active' class to the clicked button
    buttonPressed.classList.toggle('active');
}

var buttonsEdu = ['edu1', 'edu2', 'edu3', 'edu4', 'edu5', 'edu6', 'edu7']

function select2(evt) {
    var buttonPressed = evt.currentTarget;
    
    // Remove 'active' class from all buttons
    for (var i = 0; i < buttonsAge.length; i++) {
        var button = document.getElementById(buttonsEdu[i])

        if (button) {
            button.classList.remove('active')
        }
    }
    // Add 'active' class to the clicked button
    buttonPressed.classList.toggle('active');
}

