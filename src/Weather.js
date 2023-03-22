import displayWeather from "./view";

const errorMsg = document.getElementById("Error");

async function getWeather(place = "Arandis") {
	try {
		const resp = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=e3cd04868ae1a93483419e83e5d735b7`
	);
	//console.log(resp);

	    const respData = await resp.json();
		
		const locationName = respData.name;
		// console.log(respData.name);


		const weatherMainData = respData.main;
		
		// console.log(weatherMainData);

                const weatherSubData = respData.weather[0];
	            // console.log(weatherSubData);

		displayWeather.showData(locationName, weatherMainData, weatherSubData);
	} catch (err) {
		console.log(err);
		console.log("This is from catch: error");
	            errorMsg.textContent = "Enter Valid City, State or Country!";
        }
}

async function getLocation(e) {
	errorMsg.textContent = "";

	const location = document.getElementById("location");
	// console.log(location);
	if (location.value !== "") {
		e.preventDefault();
		// console.log(location.value);
		getWeather(location.value);
		location.value = "";
	}
}

export default (function weather() {
	function initialize() {
		const submitBtn = document.getElementById("submit");
		submitBtn.addEventListener("click", getLocation);
		getWeather("Arandis");
	}
	return {
		initialize,
		getWeather,
	};
})();