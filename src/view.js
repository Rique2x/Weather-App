import { format } from "date-fns";
// main Data Selectors

const currentWeather = document.getElementById("currentWeather");
const place = document.getElementById("place");
// const weatherDesc = document.getElementById("weatherDesc");
const currentDate = document.getElementById("currentDate");
const currentTime = document.getElementById("currentTime");
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
	const degrees = new Intl.NumberFormat("en-US", {
		style: "unit",
		unit: "celsius",
	});
	temperature.innerHTML = `${degrees.format(data.temp)}`;
}

function displayDateTime() {
	const formattedDate = format(new Date(), "MMM dd, yyyy");
	currentDate.textContent = formattedDate;

	const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
	currentTime.textContent = time;
}

function displaySubData(resp) {
	const degrees = new Intl.NumberFormat("en-US", {
		style: "unit",
		unit: "celsius",
	});
	feel.textContent = `${degrees.format(resp.main.feels_like)}`;

	humidity.textContent = `${resp.main.humidity}%`;

	windSpeed.textContent = `${resp.wind.speed} km/h`;
}

const displayWeather = (() => {
	function showData(resp, location, mainData, subData) {
		//console.log({ resp, location, mainData, subData });


		displayName(location);
		displayCurrentWeather(subData);
		displayTemp(mainData);
		displayDateTime();
	}

	return {
		showData,
	};
})();

export default displayWeather;