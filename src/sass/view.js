import { compareAsc, format } from "date-fns";
//    <h1 id="currentWeather">Broken Clouds</h1>
//                     <h2 id="place">Madina</h2>
//                     <p id="currentDate">24 Feb 2023</p>
//                     <p id="currentTime">2:20 pm</p>
//                 </div>
//                 <div class="weather__mainDetails__temperature">
//                     <h1 id="temperature">24 C</h1>
const currentWeather = document.getElementById("currentWeather");
const place = document.getElementById("place");
// const weatherDesc = document.getElementById("weatherDesc");
const currentDate = document.getElementById("currentDate");
const currentTime = document.getElementById("currentTime");
const temperature = document.getElementById("temperature");

function displayName(name) {
	place.textContent = name;
}

function displayCurrentWeather(subData) {
	currentWeather.textContent = `${subData.main} (${subData.description})`;
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

const displayWeather = (() => {
	function showData(location, mainData, subData) {
		console.log({ location, mainData, subData });

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