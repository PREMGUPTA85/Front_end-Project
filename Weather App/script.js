// Weather API ka endpoint (example URL)
 // yeh ek sample URL hai jisse weather data milta hai

const temperatureField = document.querySelector(".temp");
// HTML me jis element ki class "temp" hai usko select karke variable me store kiya

const locationField = document.querySelector(".time_location p");
// "time_location" class ke andar jo <p> tag hai usko select kiya (location dikhane ke liye)

const dateandTimeField = document.querySelector(".time_location span");
// same container me jo <span> hai usko select kiya (date & time ke liye)

const conditionField = document.querySelector(".condition p");
// weather condition (jaise sunny, cloudy) dikhane ke liye element select kiya

const searchField = document.querySelector(".search_area");
// search input field ko select kiya (jahan user city enter karega)

const form = document.querySelector("form");
// pura form select kiya (submit event handle karne ke liye)

let target = 'Lucknow';
// default city set ki (jab page load hoga to Lucknow ka weather aayega)

form.addEventListener('submit', searchForLocation)
// jab form submit hoga to searchForLocation function call hoga

const fetchResults = async (targetLocation) => {
    // async function banayi jisse API call kar sake

    let url = `http://api.weatherapi.com/v1/current.json?key=cd1898a995604cc6aa791727262504&q=${targetLocation}&aqi=no`
    // dynamic URL banaya jisme user ka entered location add hoga

    const res = await fetch(url);
    // API ko request bheji aur response ka wait kiya

    const data = await res.json();
    // response ko JSON format me convert kiya

    console.log(data);
    // console me data check karne ke liye print kiya

    let locationName = data.location.name;
    // API se location ka naam nikala

    const time = data.location.localtime;
    // local time nikala (city ka)

    const temp = data.current.temp_c;
    // temperature (Celsius me) nikala

    let condition = data.current.condition.text;
    // weather condition (text form me) nikali

    updateDetails(temp, locationName, time, condition);
    // extracted data ko UI update karne ke liye function call kiya
}

function updateDetails(temp, locationName, time, condition){
    // yeh function UI me values update karega

    let splitDate = time.split(' ')[0];
    // time string ko split karke sirf date part nikala (YYYY-MM-DD)

    let splitTime = time.split(' ')[1];
    // same string se sirf time part nikala (HH:MM)

    let currentDay = getDayName(new Date(splitDate).getDay());
    // date ko day number me convert kiya (0-6) aur uska naam nikala

    temperatureField.innerText = temp;
    // temperature ko HTML me show kiya

    locationField.innerText = locationName;
    // location naam show kiya

    dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    // date + day + time combine karke display kiya

    conditionField.innerText = condition;
    // weather condition show ki
}

function searchForLocation(e){
    e.preventDefault()
    // form submit hone par page reload hone se roka

    target = searchField.value
    // input field se user ka entered city liya

    fetchResults(target);
    // us city ka weather fetch kiya
}

fetchResults(target)
// page load hote hi default city (Lucknow) ka weather fetch kiya

function getDayName(number){
    // yeh function day number ko day name me convert karta hai

    switch (number) {
        case 0: 
            return 'Sunday'
        case 1: 
            return 'Monday'
        case 2: 
            return 'Tuesday'
        case 3: 
            return 'Wednesday'
        case 4: 
            return 'Thursday'
        case 5: 
            return 'Friday'
        case 6: 
            return 'Saturday'
    }
}