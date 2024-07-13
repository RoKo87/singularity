var guessTime = [2050, "January", 1, 0, 0, 0, 0]



function daySelected(date) {
    guessTime[2] = date;
}

function showGuess() {
    let minSlot = guessTime[4] < 10 ? "0" + guessTime[4] : "" + guessTime[4];
    let secSlot = guessTime[5] < 10 ? "0" + guessTime[5] : "" + guessTime[5];
    let milliSlot = guessTime[6] < 100 ? guessTime[6] : "" + guessTime[6];
    if (guessTime[6] < 10) milliSlot = "00" + milliSlot 
    else milliSlot = "0" + milliSlot

    setText("guessShown", "" + guessTime[2] + " " + guessTime[1] + ", " + guessTime[0] + " at " + guessTime[3] + ":" + minSlot + ":" + secSlot + "." + milliSlot)
    setText("guessShown2", "" + guessTime[2] + " " + guessTime[1] + ", " + guessTime[0] + " at " + guessTime[3] + ":" + minSlot + ":" + secSlot + "." + milliSlot)
}
function showDates () {
    guessTime[0] = getValue("year_input");

    switch (getValue("month_input")) {
        case "0": break;
        case "1": guessTime[1] = "January"; break;
        case "2": guessTime[1] = "February"; break;
        case "3": guessTime[1] = "March"; break;
        case "4": guessTime[1] = "April"; break;
        case "5": guessTime[1] = "May"; break;
        case "6": guessTime[1] = "June"; break;
        case "7": guessTime[1] = "July"; break;
        case "8": guessTime[1] = "August"; break;
        case "9": guessTime[1] = "September"; break;
        case "10": guessTime[1] = "October"; break;
        case "11": guessTime[1] = "November"; break;
        case "12": guessTime[1] = "December"; break;
        default: break;
    }
    
    hideElement("dater-1");
    hideElement("dater-2");
    hideElement("dater-3");
    hideElement("dater-4");
    hideElement("date-29");
    hideElement("date-30");
    hideElement("date-31");

    if (getValue("month_input") != "0") {
        showElement("dater-1");
        showElement("dater-2");
        showElement("dater-3");
        showElement("dater-4");
        if (getValue("month_input") != "2") {
            showElement("date-29");
            showElement("date-30");
            if (getValue("month_input") != "4"
            && getValue("month_input") != "6"
            && getValue("month_input") != "9"
            && getValue("month_input") != "11") {
                showElement("date-31");
            }
        } else if (!isNaN(getValue("year_input")) && isLeapYearNum(getValue("year_input"))) {
                showElement("date-29");
        }
    }
}

function isLeapYearNum(x) {
    if (x % 4 == 0) {
        if (x % 100 == 0) {
            if (x % 400 == 0) {
                console.log(x + " is a leap year");
                return true;
            } 
            console.log(x + " is not a leap year");
            return false;
        }
        console.log(x + " is a leap year");
        return true; 
    } else { 
        console.log(x + " is not a leap year");
        return false;
    }
}

//page movement
var pages = ['date', 'time'];

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

// update the value shown when slider is drawn.
function minsliderupdate() {
    setText("min-show", getValue("min-slider"))
}

function secsliderupdate() {
    setText("sec-show", getValue("sec-slider"))
}

function millisliderupdate() {
    setText("milli-show", getValue("milli-slider"))
}