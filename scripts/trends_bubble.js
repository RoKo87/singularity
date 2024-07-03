var cities = [
    'Tokyo, Japan', 
    'Delhi, India', 
    'Shanghai, China', 
    'Dhaka, Bangladesh', 
    'Sao Paulo, Brazil', 
    'Mexico City, Mexico', 
    'Cairo, Egypt', 
    'Beijing, China', 
    'Mumbai, India', 
    'Osaka, Japan',
    'Chongqing, China', 
    'Karachi, Pakistan', 
    'Istanbul, Turkey', 
    'Kinshasa, DR Congo', 
    'Lagos, Nigeria', 
    'Buenos Aires, Argentina', 
    'Kolkata, India', 
    'Manila, Philippines', 
    'Tianjin, China',
    'Guangzhou, China', 
    'Rio de Janeiro, Brazil', 
    'Lahore, Pakistan', 
    'Bangalore, India', 
    'Shenzhen, China', 
    'Moscow, Russia', 
    'Chennai, India', 
    'Bogota, Colombia', 
    'Paris, France', 
    'Jakarta, Indonesia',
    'Lima, Peru', 
    'Bangkok, Thailand', 
    'Hyderabad, India', 
    'Seoul, South Korea', 
    'Nagoya, Japan', 
    'London, United Kingdom', 
    'Chengdu, China', 
    'Nanjing, China', 
    'Tehran, Iran', 
    'Ho Chi Minh City, Vietnam', 
    'Luanda, Angola', 
    'Ahmedabad, India', 
    'Kuala Lumpur, Malaysia', 
    'New York City, USA', 
    'Hong Kong, China', 
    'Wuhan, China', 
    'Hanoi, Vietnam', 
    'Shijiazhuang, China', 
    'Dongguan, China', 
    'Hangzhou, China', 
    'Riyadh, Saudi Arabia', 
    'Foshan, China', 
    'Pune, India', 
    'Surat, India', 
    'Jinan, China', 
    'Suzhou, China', 
    'Zhengzhou, China', 
    'Ningbo, China', 
    'Dar es Salaam, Tanzania', 
    'Khartoum, Sudan', 
    'Alexandria, Egypt', 
    'Abidjan, Ivory Coast', 
    'Shenyang, China', 
    'Nairobi, Kenya', 
    'Sydney, Australia', 
    'Cape Town, South Africa', 
    'Harbin, China', 
    'Melbourne, Australia', 
    'Algiers, Algeria', 
    'Qingdao, China', 
    'Casablanca, Morocco', 
    'Santo Domingo, Dominican Republic', 
    'Dallas, USA', 
    'Yangon, Myanmar',
    'Changsha, China', 
    'Kabul, Afghanistan', 
    'Wuxi, China', 
    'Kanpur, India', 
    'Ibadan, Nigeria',
    'Damascus, Syria', 
    'Guayaquil, Ecuador', 
    'Hefei, China', 
    'Tashkent, Uzbekistan', 
    'Fukuoka, Japan', 
    'Zhongshan, China', 
    'Lusaka, Zambia', 
    'St. Petersburg, Russia', 
    'Houston, USA', 
    'Puebla, Mexico',
    'Philadelphia, USA',
    'Santiago, Chile', 
    'Madrid, Spain', 
    'Singapore, Singapore', 
    'Yokohama, Japan',
    'Xi\'an, China', 
    'Kano, Nigeria',
    'Mashhad, Iran', 
    'Lanzhou, China', 
    'Kumasi, Ghana', 
    'Porto Alegre, Brazil',
    'Medellin, Colombia', 
    'Kozhikode, India', 
    'Campinas, Brazil',
    'Surabaya, Indonesia', 
    'Nagpur, India',
    'Accra, Ghana', 
    'Naples, Italy', 
    'Putian, China', 
    'Grande Vitoria, Brazil', 
    'Multan, Pakistan', 
    'Mecca, Saudi Arabia', 
    'Havana, Cuba', 
    'Yangzhou, China', 
    'Wuhu, China', 
    'Brussels, Belgium',
    'Perth, Australia', 
    'Conakry, Guinea',
    'Baoding, China', 
    'Kollam, India', 
    'Taizhou, China',
    'Bursa, Turkey', 
    'Linyi, China', 
    'Hiroshima, Japan', 
    'Minsk, Belarus', 
    'Rajkot, India', 
    'Haikou, China', 
    'Daqing, China', 
    'Yancheng, China', 
    'Almaty, Kazakhstan', 
    'Lianyungang, China', 
    'Valencia, Venezuela', 
    'Lome, Togo', 
    'Panama City, Panama', 
    'Semarang, Indonesia', 
    'Vienna, Austria', 
    'Hyderabad, Pakistan', 
    'Rabat, Morocco', 
    'Quito, Ecuador', 
    'Ludhiana, India',
    'Davao City, Philippines', 
    'Baixada Santista, Brazil', 
    'La Paz, Bolivia', 
    'West Yorkshire, United Kingdom', 
    'Benin City, Nigeria', 
    'Leon de los Aldamas, Mexico', 
    'Zhuhai, China',
    'Datong, China', 
    'Quanzhou, China', 
    'Can Tho, Vietnam',
    'Matola, Mozambique', 
    'Adana, Turkey', 
    'Madurai, India', 
    'Sharjah, UAE',
    'Santa Cruz, Bolivia', 
    'Palembang, Indonesia', 
    'Raipur, India', 
    'Gaziantep, Turkey', 
    'Turin, Italy', 
    'Meerut, India',
    'Warsaw, Poland', 
    'Mosul, Iraq', 
    'Cixi, China', 
    'Hamburg, Germany', 
    'La Laguna, Mexico',
    'Budapest, Hungary', 
    'Bucharest, Romania', 
    'Montevideo, Uruguay', 
    'Jiangmen, China', 
    'Lyon, France', 
    'Varanasi, India', 
    'Batam, Indonesia',
    'Xiangyang, China', 
    'Shiraz, Iran',
    'Yinchuan, China', 
    'Yichang, China',
    'Stockholm, Sweden', 
    'Srinagar, India',
    'Glasgow, United Kingdom', 
    'Jamshedpur, India',
    'Novosibirsk, Russia',
    'Anshan, China',
    'Aurangabad, India', 
    'Qinhuangdao, China', 
    'Monrovia, Liberia', 
    'Tiruppur, India', 
    'Auckland, New Zealand', 
    'Makassar, Indonesia', 
    'Ulaanbaatar, Mongolia', 
    'Jilin, China', 
    'Xining, China', 
    'Suqian, China', 
    'Kananga, DR Congo', 
    'Hengyang, China', 
    'Tabriz, Iran', 
    'Phoenix, USA', 
    'Muscat, Oman', 
    'Anyang, China', 
    'Calgary, Canada', 
    'Qiqihaer, China',
    'Marseille, France', 
    'Onitsha, Nigeria', 
    'Cordoba, Argentina',
    'Rosario, Argentina',
    'Karaj, Iran', 
    'N\'Djamena, Chad', 
    'Jodhpur, India',
    'Ciudad Juarez, Mexico', 
    'Harare, Zimbabwe', 
    'Daejeon, South Korea',
    'Munich, Germany', 
    'Medina, Saudi Arabia', 
    'Kathmandu, Nepal', 
    'Jining, China', 
    'Tegucigalpa, Honduras', 
    'Abu Dhabi, UAE',
    'Kaohsiung, Taiwan', 
    'Ranchi, India', 
    'Edmonton, Canada', 
    'Zhangjiakou, China',
    'Natal, Brazil', 
    'Mandalay, Myanmar', 
    'Gwangju, South Korea', 
    'Philadelphia, USA', 
    'Yekaterinburg, Russia',
    'Sao Luis, Brazil', 
    'Jabalpur, India',
    'Kota, India', 
    'Huainan, China', 
    'Asansol, India',
    'Chaozhou, China', 
    'Nouakchott, Mauritania',
    'Yiwu, China', 
    'San Antonio, USA', 
    'Gwalior, India', 
    'Allahabad, India', 
    'San Jose, Costa Rica',
    'Ganzhou, China',
    'Chon Buri, Thailand', 
    'Amritsar, India',
    'Basra, Iraq', 
    'Taizhou, China'
]
var jobs = [
    'Accountant',
    'Actuary',
    'Administrative Assistant',
    'Advertising Manager',
    'Aerospace Engineer',
    'Air Traffic Controller',
    'Aircraft Mechanic',
    'Architect',
    'Art Director',
    'Attorney',
    'Audiologist',
    'Baker',
    'Bank Teller',
    'Bartender',
    'Biochemist',
    'Biomedical Engineer',
    'Bookkeeper',
    'Bricklayer',
    'Bus Driver',
    'Business Analyst',
    'Butcher',
    'Cabinetmaker',
    'Carpenter',
    'Cashier',
    'Chef',
    'Chemical Engineer',
    'Chemist',
    'Chiropractor',
    'Civil Engineer',
    'Claims Adjuster',
    'Clergy',
    'Clinical Psychologist',
    'Computer Programmer',
    'Construction Manager',
    'Consultant',
    'Cook',
    'Copywriter',
    'Customer Service Representative',
    'Dentist',
    'Dietitian',
    'Doctor',
    'Electrician',
    'Elementary School Teacher',
    'Engineer',
    'Environmental Scientist',
    'Epidemiologist',
    'Executive Assistant',
    'Farmer',
    'Financial Advisor',
    'Firefighter',
    'Fitness Trainer',
    'Flight Attendant',
    'Florist',
    'Food Scientist',
    'Forester',
    'Graphic Designer',
    'Hairdresser',
    'Health Educator',
    'High School Teacher',
    'Home Health Aide',
    'Hotel Manager',
    'Human Resources Specialist',
    'Industrial Designer',
    'Information Security Analyst',
    'Insurance Agent',
    'Interpreter',
    'IT Manager',
    'Janitor',
    'Journalist',
    'Judge',
    'Laboratory Technician',
    'Landscaper',
    'Law Enforcement Officer',
    'Librarian',
    'Logistician',
    'Machinist',
    'Magistrate',
    'Mail Carrier',
    'Maintenance Worker',
    'Management Consultant',
    'Marketing Manager',
    'Massage Therapist',
    'Mechanical Engineer',
    'Medical Assistant',
    'Medical Scientist',
    'Midwife',
    'Museum Curator',
    'Musician',
    'Nanny',
    'Network Administrator',
    'Nurse',
    'Nursing Assistant',
    'Occupational Therapist',
    'Office Clerk',
    'Optometrist',
    'Painter',
    'Paramedic',
    'Pharmacist',
    'Photographer',
    'Physical Therapist',
    'Physician',
    'Physician Assistant',
    'Pilot',
    'Plumber',
    'Police Officer',
    'Postsecondary Teacher',
    'Production Worker',
    'Project Manager',
    'Property Manager',
    'Psychiatrist',
    'Public Relations Specialist',
    'Radiologic Technologist',
    'Real Estate Agent',
    'Receptionist',
    'Recreational Therapist',
    'Registered Nurse',
    'Reporter',
    'Respiratory Therapist',
    'Retail Salesperson',
    'School Counselor',
    'Scientist',
    'Secretary',
    'Security Guard',
    'Social Worker',
    'Software Developer',
    'Speech-Language Pathologist',
    'Statistician',
    'Stock Clerk',
    'Surgeon',
    'Surveyor',
    'Tailor',
    'Tax Preparer',
    'Teacher',
    'Technical Support Specialist',
    'Technician',
    'Telemarketer',
    'Therapist',
    'Tour Guide',
    'Translator',
    'Travel Agent',
    'Truck Driver',
    'Urban Planner',
    'Veterinarian',
    'Veterinary Assistant',
    'Waiter',
    'Warehouse Worker',
    'Web Developer',
    'Welder',
    'Writer',
    'Zoologist'
]

class Date {
    constructor(year, num, age_list, loc_list, occu_list, edu_list) {
        this.year = year;
        this.num = num;
        this.age_list = age_list;
        this.loc_list = loc_list;
        this.occu_list = occu_list;
        this.edu_list = edu_list;
    }

    getAge() {
       return this.age_list.printItems();
    }

    getLoc() {
        return this.loc_list.printItems();
    }

    getOcc() {
        return this.occu_list.printItems();
    }

    getEdu() {
        return this.edu_list.printItems();
    }

    showAge() {
        var age_title = document.createElement('b');
        document.body.appendChild(age_title);
        age_title.style.padding = '20px'

        var age = document.createElement('div');
        age.setAttribute('id', 'age')
        age.style.padding = '20px'
        document.body.appendChild(age);

        var text = this.getAge();``
        console.log(this.getAge());
        var content = '';
        for (var i = 0; i < text.length; i++) {
            content += text[i];
            content += '<br>';
        }

        age_title.innerHTML = 'Ages';
        age.innerHTML = content;
    }

    showLoc() {
        var loc_title = document.createElement('b');
        document.body.appendChild(loc_title);
        loc_title.style.padding = '20px'
    
        var loc = document.createElement('div');
        loc.setAttribute('id', 'loc')
        loc.style.padding = '20px'
        document.body.appendChild(loc);
    
        var text = this.getLoc();
        console.log(this.getLoc());
        var content = '';
        for (var i = 0; i < text.length; i++) {
            content += text[i];
            content += '<br>';
        }
        
        loc_title.innerHTML = 'Location';
        loc.innerHTML = content;
    }

    showOcc() {
        var occ_title = document.createElement('b');
        document.body.appendChild(occ_title);
        occ_title.style.padding = '20px'

        var occ = document.createElement('div');
        occ.setAttribute('id', 'occ')
        occ.style.padding = '20px'
        document.body.appendChild(occ);

        var text = this.getOcc();
        console.log(this.getOcc());
        var content = '';
        for (var i = 0; i < text.length; i++) {
            content += text[i];
            content += '<br>';
        }
        
        occ_title.innerHTML = 'Occupation';
        occ.innerHTML = content;
    }

    showEdu() {
        var edu_title = document.createElement('b');
        document.body.appendChild(edu_title);
        edu_title.style.padding = '20px'

        var edu = document.createElement('div');
        edu.setAttribute('id', 'edu')
        edu.style.padding = '20px'
        document.body.appendChild(edu);

        var text = this.getEdu();
        console.log(this.getEdu());
        var content = '';
        for (var i = 0; i < text.length; i++) {
            content += text[i];
            content += '<br>';
        }
        
        edu_title.innerHTML = 'Education';
        edu.innerHTML = content;
    }

    showBubble(position) {
        var element = document.getElementById('bubbles');
        var bubble = document.createElement('div');
        element.appendChild(bubble);
        bubble.setAttribute('class', 'bubble_trends');

        bubble.innerHTML = this.year;
        bubble.style.left = position.getX() +'px'
        bubble.style.top = position.getY() +'px'
    }
}

class AgeList {
    constructor(group1, group2, group3, group4, group5, group6) { //percentages
        this.data = new Map();
        this.data.set('18 to 24 years', group1);
        this.data.set('25 to 34 years', group2); // Corrected the label from '15 to 34 years'
        this.data.set('35 to 44 years', group3);
        this.data.set('45 to 54 years', group4);
        this.data.set('55 to 64 years', group5);
        this.data.set('65 years and up', group6);
    }

    // Method to get the map
    getMap() {
        return this.data;
    }

    // Method to get the keys as an array
    getKeysArray() {
        return Array.from(this.data.keys());
    }

    // Method to get the values as an array
    getValuesArray() {
        return Array.from(this.data.values());
    }

    sortByValues() {
        const sortedArray = Array.from(this.data.entries()).sort((a, b) => b[1] - a[1]);
        this.data = new Map(sortedArray);
    }

    printItems() {
        var info = [];
        this.data.forEach((value, key) => {
            info.push(`${key}: ${value}%\n`);
        });
        return info;
    }
}

class EducationList {
    constructor(group1, group2, group3, group4, group5, group6, group7) { //percentages
        this.data = new Map();
        this.data.set('High School Dropout', group1);
        this.data.set('High School Graduate or GED Equivalent', group2);
        this.data.set('Vocational or Technical Training', group3);
        this.data.set('Associate\'s Degree (Two-Year Degree)', group4);
        this.data.set('Bachelor\'s Degree (Four-Year Degree)', group5);
        this.data.set('Master\'s Degree', group6);
        this.data.set('Doctorate or Ph.D', group7);
    }

    // Method to get the map
    getMap() {
        return this.data;
    }

    // Method to get the keys as an array
    getKeysArray() {
        return Array.from(this.data.keys());
    }

    // Method to get the values as an array
    getValuesArray() {
        return Array.from(this.data.values());
    }
    sortByValues() {
        const sortedArray = Array.from(this.data.entries()).sort((a, b) => b[1] - a[1]);
        this.data = new Map(sortedArray);
    }

    printItems() {
        var info = [];
        this.data.forEach((value, key) => {
            info.push(`${key}: ${value}%\n`);
        });
        return info;
    }
}

class LocationList {
    constructor(locations) {
        this.data = new Map();
        this.data.set('1st', locations[0]);
        this.data.set('2nd', locations[1]);
        this.data.set('3rd', locations[2]);
        this.data.set('4th', locations[3]);
        this.data.set('5th', locations[4]);
    }

     // Method to get the map
     getMap() {
        return this.data;
    }

    // Method to get the keys as an array
    getKeysArray() {
        return Array.from(this.data.keys());
    }

    // Method to get the values as an array
    getValuesArray() {
        return Array.from(this.data.values());
    }

    sortByValues() {
        const sortedArray = Array.from(this.data.entries()).sort((a, b) => b[1] - a[1]);
        this.data = new Map(sortedArray);
    }

    printItems() {
        var info = [];
        this.data.forEach((value, key) => {
            info.push(`${key}: ${value}`);
        });
        return info;
    }
}

class OccupationList {
    constructor(occupations) {
        this.data = new Map();
        this.data.set('1st', occupations[0]);
        this.data.set('2nd', occupations[1]);
        this.data.set('3rd', occupations[2]);
        this.data.set('4th', occupations[3]);
        this.data.set('5th', occupations[4]);
    }

     // Method to get the map
     getMap() {
        return this.data;
    }

    // Method to get the keys as an array
    getKeysArray() {
        return Array.from(this.data.keys());
    }

    // Method to get the values as an array
    getValuesArray() {
        return Array.from(this.data.values());
    }

    sortByValues() {
        const sortedArray = Array.from(this.data.entries()).sort((a, b) => b[1] - a[1]);
        this.data = new Map(sortedArray);
    }

    printItems() {
        var info = [];
        this.data.forEach((value, key) => {
            info.push(`${key}: ${value}%\n`);
        });
        return info;
    }
}

class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}

function round_2(x) {
    return Math.round(x * 100) / 100;
  }

function percent_list(num) {
    var random_nums = [];
    for (var i = 0; i < num; i++) {
        random_nums.push(round_2(Math.random() * 100));
    }

    random_nums.sort(function (a, b) { return a - b });

    random_nums.unshift (0);
    random_nums.push(100);

    var percentages = [];
    for (var i = 0; i < random_nums.length - 1; i++) {
        percentages.push(round_2(random_nums[i + 1] - random_nums[i]));
    }

    return percentages;
}
  
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

function randomizeAge() {
    var age_percents = percent_list(6);
    var age_list = new AgeList(age_percents[0], age_percents[1], age_percents[2], age_percents[3], age_percents[4], age_percents[5]);
    return age_list;
}

function randomizeEducation() {
    var edu_percents = percent_list(6);
    var edu_list = new EducationList(edu_percents[0], edu_percents[1], edu_percents[2], edu_percents[3], edu_percents[4], edu_percents[5], edu_percents[6]);
    return edu_list;
}

function randomizeLocation() {
    var locations_test = cities.slice(0, 5);
    var locations_percentages = percent_list(5);
    locations_percentages.sort(function (a, b) { return a - b });

    var locations = [];
    for (var i = 0; i < 5; i++) {
        locations.unshift(`${locations_test[i]}: ${locations_percentages[i]}`);
    }

    return new LocationList(locations);
}

function randomizeOccupation() {
    var occupations_test = jobs.slice(0, 5);
    var occupations_percentages = percent_list(15);
    occupations_percentages.sort(function (a, b) { return a - b });

    var occupations = [];
    for (var i = 0; i < 5; i++) {
        occupations.unshift(`${occupations_test[i]}: ${occupations_percentages[i]}`);
    }

    return new OccupationList(occupations);
}

function randomPosition(size) {
    
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;

    var randomX = Math.floor(Math.random() * (maxWidth - size));
    var randomY = Math.floor(Math.random() * (maxHeight - size));

    return new Position(randomX, randomY);
}




   
shuffle(cities);
shuffle(jobs);

// console.log(randomPosition(100));



var test = new Date(2500, 50000, randomizeAge(), randomizeLocation(), randomizeOccupation(), randomizeEducation());

document.addEventListener('DOMContentLoaded', function() {

    // test.showAge();
    // test.showLoc();
    // test.showOcc();
    // test.showEdu();
    test.showBubble(randomPosition(100));


});
