//http://api.weatherapi.com/v1/current.json?key=cd1898a995604cc6aa791727262504&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

let target = 'Lucknow';

form.addEventListener('submit', searchForLocation)

const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=cd1898a995604cc6aa791727262504&q=${targetLocation}&aqi=no
`
    const res = await fetch(url);
    const data = await res.json();

    // console.log(res);
    console.log(data);

    let locationName = data.location.name;
    const time = data.location.localtime;
    const temp = data.current.temp_c;

    let condition = data.current.condition.text;
    updateDetails(temp, locationName, time, condition);
}

function updateDetails(temp, locationName, time, condition){
    let splitDate = time.split(' ')[0];

    let splitTime = time.split(' ')[1];

    let currentDay = getDayName(new Date(splitDate).getDay());



    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    conditionField.innerText = condition;
}


function searchForLocation(e){
    e.preventDefault() // page reload hone se rok dega

    target = searchField.value

    fetchResults(target);
}

fetchResults(target)


function getDayName(number){
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