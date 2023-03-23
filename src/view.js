import { format } from "date-fns";

// main Data Selectors
const currentWeather = document.getElementById("currentWeather");
const place = document.getElementById("place");
const currentDate = document.getElementById("currentDate");
const temperature = document.getElementById("temperature");

// sub Data selectors
const feel = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

function displayName(name) {
	place.textContent = name;
}

function displayCurrentWeather(subData) {
	currentWeather.innerHTML = `${subData.main} <small>(${subData.description})</small>`;
}

function displayTemp(data) {
	const { temp } = data;
	// * this formats the temperature in celsius symbol
	const degrees = new Intl.NumberFormat("en-US", {
		style: "unit",
		unit: "celsius",
	});
	temperature.innerHTML = `${degrees.format(temp)}`;
}

function displayDateTime() {
	const formattedDate = format(new Date(), "MMM dd, yyyy");
	currentDate.textContent = formattedDate;
	const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
	
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

function displaySubData(main, wind) {
	// * this formats the temperature in celsius symbol
	const degrees = new Intl.NumberFormat("en-US", {
		style: "unit",
		unit: "celsius",
	});
	feel.textContent = `${degrees.format(main.feels_like)}`;
	humidity.textContent = `${main.humidity}%`;
	windSpeed.textContent = `${wind.speed} km/h`;
}

const displayWeather = (() => {
	function showData(resp) {
		const { name, main, weather, wind } = resp;

		displayName(name);
		displayCurrentWeather(weather[0]);
		displayTemp(main);
		displaySubData(main, wind);
		displayDateTime();
	}

	return {
		showData,
	};
})();

export default displayWeather;