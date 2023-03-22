import { format } from "date-fns";

// main Data Selectors
const currentWeather = document.getElementById("currentWeather");
const place = document.getElementById("place");
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
	currentTime.textContent = time;
}

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