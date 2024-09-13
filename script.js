
const input=document.getElementById("city-input");
const button=document.getElementById("search-button");
const city_name=document.getElementById("city-name");
const city_time=document.getElementById("city-time");
const city_temp=document.getElementById("city-temp");


// http://api.weatherapi.com/v1/current.json?key=f0f6b839817348d691e101527242607&q=${input}&aqi=yes

async function getdata(city_name){
    const result =await fetch(`https://api.weatherapi.com/v1/current.json?key=f0f6b839817348d691e101527242607&q=${city_name}&aqi=yes`);
    return await result.json();
}
button.addEventListener("click",async ()=>{
    const cityname=input.value;
    const res=await getdata(cityname);
    console.log(res);
    city_name.innerText=`${res.location.name} ,${res.location.region} ,${res.location.country}`
    city_time.innerText=`${res.location.localtime}`
    city_temp.innerText=`${res.current.temp_c} degree celsius`
})

