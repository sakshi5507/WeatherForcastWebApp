const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '79ee086848msh949b4b4f6078ca2p19b25ajsn80dfa9296767',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'

  }
};

const getWeather = (city)=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '79ee086848msh949b4b4f6078ca2p19b25ajsn80dfa9296767',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  
    }
  };

  cityName.innerHTML = city
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)

 .then(response => response.json())
 .then(response => { console.log(response)
  // cloud_pct.innerHTML = response.cloud_pct
  temp.innerHTML = response.temp
  temp2.innerHTML = response.temp
  feels_like.innerHTML = response.feels_like
  humidity.innerHTML = response.humidity
  humidity2.innerHTML = response.humidity
  min_temp.innerHTML = response.min_temp
  max_temp.innerHTML = response.max_temp
  wind_speed.innerHTML = response.wind_speed
  wind_speed2.innerHTML = response.wind_speed
  wind_degrees.innerHTML = response.wind_degrees
  sunrise.innerHTML = response.sunrise
  sunset.innerHTML = response.sunset


})
.catch(err => console.error(err));
}

const cities = ["Boston","Mumbai","America","Kolkata"]
const promise1 = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities[0], options)
const promise2 = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities[1], options)
const promise3 = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities[2], options)
const promise4 = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities[3], options)
const tableBody = document.querySelector('#weather-table tbody');
Promise.all([promise1, promise2, promise3, promise4]).then(res=>res.map(a=>a.json())).then((values) => {
  values.map((a,i)=>a.then(x=>{
    console.log(x)
    
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cities[i]}</td>
            <td>${x.temp}</td>
            <td>${x.feels_like}</td>
            <td>${x.humidity}</td>
            <td>${x.min_temp}</td>
            <td>${x.max_temp}</td>
            <td>${x.wind_speed}</td>
            <td>${x.wind_degrees}</td>
            <td>${x.sunrise}</td>
            <td>${x.sunset}</td>
        `;
        tableBody.appendChild(row);

  }));
});




// Event Listener for the search button
submit.addEventListener("click", (e)=> {
  e.preventDefault()
  getWeather(city.value)

} )  

getWeather("Delhi") 
