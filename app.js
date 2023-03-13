const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const weatherDiv = document.querySelector(".weather");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = input.value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=30d4741c779ba94c470ca1f63045390a`
  );
  const data = await response.json();
  const {
    name,
    main: { temp, feels_like },
    weather: [{ description, icon }],
  } = data;
  weatherDiv.innerHTML = `
    <h2>${name}</h2>
    <img src="https://openweathermap.org/img/w/${icon}.png" alt="${description}">
    <p>${description}</p>
    <p>Temperature: ${temp} &#8451;</p>
    <p>Feels like: ${feels_like} &#8451;</p>
  `;
  input.value = "";
});
