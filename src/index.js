async function getWeather(place) {
	const resp = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=e3cd04868ae1a93483419e83e5d735b7`
	);
	console.log(resp);

	const respData = await resp.json();
	console.log(respData);

	const weatherData = respData.main;
	console.log(weatherData);
}

getWeather("Jamshedpur");