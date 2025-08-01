

let weatherLocationField = document.getElementById("cityInput");
let weatherPanel = document.getElementsByClassName("weather-section")[0];
let cityListUnorderedList = document.getElementsByClassName("list-cities")[0]; //ul element container of list


  weatherLocationField.addEventListener("input", function () {
    weatherPanel.style.display = "none";
    cityListUnorderedList.innerHTML = "";
    locationSuggestions(weatherLocationField.value);
  });

// async function fetchWeatherLocation(city){
//     fetch(`http://localhost:3000/weather?city=${city}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error fetching weather data:", error));
// }
async function locationSuggestions(city){
    try{
        const response = await fetch(`http://localhost:3000/suggestions?city=${city}`);
        const data = await response.json();
        const cityNames = data.map(location => {
            let locationName = [location.name];
            if(location.state){
                locationName.push(location.state);
            }
            if(location.country){
                locationName.push(location.country);
            }
            console.log(locationName);
            return locationName.join(", ");
        }); // RETURN ARRAY
        const suggestions = cityNames.filter(cities => cities.toLowerCase().startsWith(city.toLowerCase())).slice(0, 7);
            cityListUnorderedList.innerHTML = "";
            if(city.length === 0){
                weatherPanel.style.display = "none";
                return;
            }
            if(suggestions.length && city.length > 0){
                weatherPanel.style.display = "block";
                suggestions.forEach(cities => {
                    let listElement = document.createElement("li");
                    listElement.classList.add("list-group-item");
                    listElement.textContent = cities;
                    cityListUnorderedList.appendChild(listElement);
                })
                weatherPanel.style.height = "auto";
            }else if(city.length > 0 && suggestions.length === 0){
                weatherPanel.style.display = "block";
                let listElement = document.createElement("li");
                listElement.classList.add("list-item");
                listElement.textContent = "No location found";
                cityListUnorderedList.appendChild(listElement);
                weatherPanel.style.height = "auto";
            }
    }catch (error) {
        console.error("Error fetching location suggestions:", error);
    }
}
