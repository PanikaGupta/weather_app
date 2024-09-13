const input = document.getElementById("city-input");
const button = document.getElementById("search-button");
const city_name_display = document.getElementById("city-name");
const city_time = document.getElementById("city-time");
const city_temp = document.getElementById("city-temp");

async function getdata(city_name) {
    try {
        const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=f0f6b839817348d691e101527242607&q=${city_name}&aqi=yes`);

        if (!result.ok) {
            throw new Error(`Error fetching data: ${result.status}`);
        }

        return await result.json();
    } catch (error) {
        console.error("Fetch error:", error);
        return null;  // Return null if there's an error
    }
}

button.addEventListener("click", async () => {
    const cityname = input.value;
    
    if (cityname) {  // Check if city name is not empty
        const res = await getdata(cityname);
        
        if (res) {  // Check if the response is valid
            city_name_display.innerText = `${res.location.name}, ${res.location.region}, ${res.location.country}`;
            city_time.innerText = `${res.location.localtime}`;
            city_temp.innerText = `${res.current.temp_c} degree Celsius`;
        } else {
            city_name_display.innerText = `Error fetching data for "${cityname}"`;
            city_time.innerText = '';
            city_temp.innerText = '';
        }
    } else {
        city_name_display.innerText = 'Please enter a city name';
        city_time.innerText = '';
        city_temp.innerText = '';
    }
});
