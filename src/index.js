async function getWeather(place) {
	const resp = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=c71a2bee0691fb692d156e4c950c6d61`
	);
	console.log(resp);

	const respData = await resp.json();
	console.log(respData);

	const weatherData = respData.main;
	console.log(weatherData);
}

getWeather("Jamshedpur");