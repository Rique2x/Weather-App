(() => {
  "use strict";
  const t = document.getElementById("Error");
  async function e(e = "Arandis") {
    try {
      const t = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=e3cd04868ae1a93483419e83e5d735b7`
        ),
        n = await t.json();
      console.log(n.name);
      const o = n.main;
      console.log(o);
      const a = n.weather[0];
      console.log(a);
    } catch {
      t.textContent = "Enter Valid City, State or Country!";
    }
  }
  async function n(n) {
    t.textContent = "";
    const o = document.getElementById("location");
    "" !== o.value && (n.preventDefault(), e(o.value));
  }
  ({
    initialize: function () {
      document.getElementById("submit").addEventListener("click", n);
    },
    getWeather: e,
  }.render());
})();
