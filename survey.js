var pages = ['main', 'age', 'location', 'occupation', 'education'];

function next(id) {
    var page = document.getElementById(id);
    var nextPage;

    page.classList.add('go-left');
    
    setTimeout(function() {
        page.classList.remove('active');
        page.classList.remove('go-left');
    }, 500);

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
        nextPage.classList.remove('faded-out');
    }, 500);
}
