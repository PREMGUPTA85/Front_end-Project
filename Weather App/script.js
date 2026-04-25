//http://api.weatherapi.com/v1/current.json?key=cd1898a995604cc6aa791727262504&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const weatherField = document.querySelector(".condition p");
const searchField = document.querySelector("search_area");
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

    const time = data.location.localtime;
    const temp = data.current.temp_c;

    let condition = data.current.condition.text;
}

function searchForLocation(e){
    e.preventDefault() // page reload hone se rok dega

    target = searchField.value

    fetchResults(target);
}

fetchResults(target)