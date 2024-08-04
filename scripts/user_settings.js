first_names = [
    "Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "Elijah", "Sophia", "William", "Isabella",
    "James", "Mia", "Benjamin", "Charlotte", "Lucas", "Amelia", "Henry", "Harper", "Alexander", "Evelyn",
    "Mason", "Abigail", "Michael", "Ella", "Ethan", "Avery", "Daniel", "Scarlett", "Matthew", "Grace",
    "Aiden", "Chloe", "Jackson", "Victoria", "Logan", "Riley", "David", "Aria", "Joseph", "Lily",
    "Samuel", "Aubrey", "Sebastian", "Zoey", "Carter", "Hannah", "Wyatt", "Lillian", "Jayden", "Addison",
    "John", "Leah", "Owen", "Natalie", "Dylan", "Zoe", "Luke", "Stella", "Gabriel", "Hazel",
    "Anthony", "Ellie", "Isaac", "Paisley", "Grayson", "Audrey", "Jack", "Skylar", "Julian", "Violet",
    "Levi", "Claire", "Christopher", "Bella", "Joshua", "Aurora", "Andrew", "Lucy", "Lincoln", "Anna",
    "Mateo", "Samantha", "Ryan", "Caroline", "Jaxon", "Genesis", "Nathan", "Aaliyah", "Aaron", "Kennedy",
    "Isaiah", "Kinsley", "Thomas", "Madeline", "Charles", "Sarah", "Caleb", "Madelyn", "Josiah", "Adeline"
]

last_names = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
    "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
    "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
    "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
    "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
    "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
    "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez"
]



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


var savedDate

function saveDate(id) {
    var dateInput = document.getElementById(id)
    date = dateInput.value
    savedDate = date
}


function resetDate(id) {
    var dateInput = document.getElementById(id)
    dateInput.value = savedDate
}


addEventListener("DOMContentLoaded", (event) => {

    friends = document.getElementById('friends-body')
    console.log(friends)

    for (let i = 0; i < 20; i++) {
        const person = document.createElement('tr')
        friends.appendChild(person)

        data = createFriend()

        const id = document.createElement('th')
        id.innerHTML = i + 1
        id.scope = 'row'
        person.appendChild(id)

        const name = document.createElement('th')
        name.innerHTML = data[0]
        person.appendChild(name)

        const guesses = document.createElement('th')
        guesses.innerHTML = data[1]
        person.appendChild(guesses)

        const date = document.createElement('th')
        date.innerHTML = data[2]
        person.appendChild(date)
    }

    
    

});

function move(id) {
    current = document.getElementsByClassName('current')[0]
    if (document.getElementById(id) == current) {
        console.log('nothing changes')
        return
    }
    
    current.classList.remove('current')
    console.log(current.classList)

    document.getElementById(id).classList.add('current')
}

function createFriend(){
    name_first = first_names[Math.floor(Math.random() * first_names.length)]
    name_last = last_names[Math.floor(Math.random() * last_names.length)]

    full_name = name_first + " " + name_last

    guesses = Math.floor(Math.random() * 10 + 1)

    month =  Math.floor(Math.random() * 12 + 1)
    day =  Math.floor(Math.random() * 29 + 1)

    date = month + "/" + day

    return [full_name, guesses, date]
}



console.log(createFriend());