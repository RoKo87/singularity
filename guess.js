function showDates () {
    if (getValue("month_input") != "0") {
        showElement("dater-1");
        showElement("dater-2");
        showElement("dater-3");
        showElement("dater-4");

    var m = parseInt(getValue("month_input"));
    console.log(m);
    switch (m) {
        case 1, 3, 5, 7, 8, 10, 12:
            showElement("date-29");
            showElement("date-30");
            showElement("date-31"); 
            break;
        case 4, 6, 9, 11:
            showElement("date-29");
            showElement("date-30");
            hideElement("date-31"); break;
    }
    } else {
        hideElement("dater-1");
        hideElement("dater-2");
        hideElement("dater-3");
        hideElement("dater-4");
        hideElement("date-29");
        hideElement("date-30");
        hideElement("date-31");
    }

}