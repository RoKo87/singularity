/* ################################################################################################################################ */
/* ################################################################################################################################ */
/* ######################################################### PROFILE PAGE ######################################################### */
/* ################################################################################################################################ */
/* ################################################################################################################################ */

//description function
var savedDescription = '';

function saveDescription(id) {
    var description = document.getElementById(id);
    savedDescription = description.value;
    description.textContent = description.value;
}

function resetDescription() {
    var description = document.getElementById('description-profile');
    description.value = savedDescription; // Reset to the saved description
}


//expand guesses function
function expand(evt, id) {
    var item = document.getElementById(id);
    var button = evt.currentTarget;
    
    if (item.classList.contains('active')) {
        item.classList.remove('active');
        button.classList.remove('active');
    } else {
        item.classList.add('active');
        button.classList.add('active');
    }
}