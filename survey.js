var pages = ['main', 'age', 'location', 'occupation', 'education']

function next(id) {
    var page = document.getElementById(id);
    page.classList.remove('active')

    setTimeout(function() {
        page.style.display = 'none'
        console.log("Waited for 0.5 seconds");
    }, 500);

    var nextPage;
    for (var i = 0; i < pages.length; i++) {
        if (pages[i] === id) {
            nextPage = document.getElementById(pages[i + 1]);
            break;
        }
    }

    if (nextPage) {
        nextPage.classList.add('active')
        setTimeout(function() {
            nextPage.style.display = 'block'
            console.log("Waited for 0.5 seconds");
        }, 500);
    } else {
        // Handle case where nextPage is not found (end of pages array)
        console.log('No next page found.');
    }
}

