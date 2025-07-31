const cities = [
  "New York",
  "London",
  "Tokyo",
  "Paris",
  "Sydney",
  "Los Angeles",
  "Toronto",
  "Dubai",
  "Singapore",
  "Hong Kong",
  "Rome",
  "Berlin",
  "Seoul",
  "Bangkok",
  "Moscow",
  "São Paulo",
  "Mexico City",
  "Istanbul",
  "Cape Town",
  "Mumbai",
  "Jakarta",
  "Manila",
  "Cairo",
  "Barcelona",
  "San Francisco",
  "Chicago",
  "Beijing",
  "Amsterdam",
  "Kuala Lumpur",
  "Lagos",
  // Added 50 more:
  "Hanoi",
  "Brussels",
  "Vienna",
  "Oslo",
  "Helsinki",
  "Copenhagen",
  "Stockholm",
  "Lisbon",
  "Athens",
  "Prague",
  "Warsaw",
  "Budapest",
  "Dublin",
  "Reykjavik",
  "Tehran",
  "Riyadh",
  "Doha",
  "Jerusalem",
  "Baghdad",
  "Baku",
  "Tbilisi",
  "Nairobi",
  "Accra",
  "Algiers",
  "Addis Ababa",
  "Casablanca",
  "Caracas",
  "Buenos Aires",
  "Lima",
  "Bogotá",
  "Quito",
  "Santiago",
  "Panama City",
  "Havana",
  "Kingston",
  "Port-au-Prince",
  "San Juan",
  "Anchorage",
  "Honolulu",
  "Vancouver",
  "Montreal",
  "Quebec City",
  "Tijuana",
  "Guadalajara",
  "Medellín",
  "Montevideo",
  "Asunción",
  "La Paz",
  "Suva",
  "Wellington"
];


let weatherLocationField = document.getElementById("cityInput");
let weatherPanel = document.getElementsByClassName("weather-section")[0];
let cityListUnorderedList = document.getElementsByClassName("list-cities")[0]; //ul element container of list

  weatherLocationField.addEventListener("input", function () {
    let input = weatherLocationField.value.toLowerCase();
    let suggestions = cities.filter(city => city.toLowerCase().startsWith(input));
    cityListUnorderedList.innerHTML = ""; // update to clear previous suggestions inside UL element
        if(suggestions.length && input.length > 0){
            console.log(suggestions);
            weatherPanel.style.display = "block";
                suggestions.slice(0, 5).forEach(city => {
                    let listElement = document.createElement("li");
                    listElement.classList.add("list-group-item");
                    listElement.textContent = city;
                    cityListUnorderedList.appendChild(listElement);
                })
            weatherPanel.style.height = "auto"; // Adjust height to fit content    
        }else if(input.length > 0 && suggestions.length === 0){
            weatherPanel.style.display = "block";
            let listElement = document.createElement("li");
            listElement.classList.add("list-group-item");
            listElement.textContent = "No location found";
            cityListUnorderedList.appendChild(listElement);
            weatherPanel.style.height = "auto";
        }
        else{
            weatherPanel.style.display = "none";
            console.log(cityListUnorderedList.innerHTML = "");
        }
    
  });