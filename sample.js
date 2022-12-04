var lat = '51.509865'
var long = '-0.118092'
let country=''
GetWeather();
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
  console.log(lat)
  console.log(long)
  GetWeather()
}

function InputPosition(){
  lat=document.getElementById('latinput').value
  long=document.getElementById('longinput').value
  console.log(lat)
  console.log(long)
  GetWeather()
}

function InputCountry(){
  country=document.getElementById('countryname').value
  console.log(country)
  GetWeather()
}


const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
console.log(regionNamesInEnglish.of('US'));

console.log(lat)
function GetWeather(){
fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + String(lat) + '&lon=' + String(long) + '&q='+String(country)+'&exclude=current.dt&appid=5b8bb692f48bc9b598d0069c5ec41b0f')
  .then(function (resp) { return resp.json() })
  .then(function (data) {
    console.log(data.city.country)
    console.log(data)
    
    document.getElementById("city-name").innerHTML = (data.city.name);
    const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
    
    document.getElementById("country").innerHTML = (regionNamesInEnglish.of(data.city.country));
    
    document.getElementById("weather").innerHTML =Math.round(data.list[0].main.temp - 273);
    
    document.getElementById("weather-type").innerHTML =data.list[0].weather[0].main;
    
    document.getElementById("weather-description").innerHTML =data.list[0].weather[0].description;
    
    document.getElementById("allotherthings").innerHTML ="humidity:"+data.list[0].main.humidity+"% "+" pressure:"+data.list[0].main.pressure+"  max-temp:"+data.list[0].main.temp_max+"  min-temp:"+data.list[0].main.temp_min+"  feels like:"+data.list[0].main.feels_like;

    
    document.getElementById("dateandtime1").innerHTML =data.list[0].dt_txt;
    document.getElementById("windspeed1").innerHTML =data.list[0].wind.speed+' m/s';
    document.getElementById("winddir1").innerHTML =data.list[0].wind.deg+'°';
    if(data.list[0].wind.deg<45){
      document.getElementById("windname1").innerHTML ='East';
    }
    else if(data.list[0].wind.deg>=315){
      document.getElementById("windname1").innerHTML ='East';
    }
    else if(data.list[0].wind.deg<135 && data.list[0].wind.deg>=45 ){
      document.getElementById("windname1").innerHTML ='North';
    }
    else if(data.list[0].wind.deg<225 && data.list[0].wind.deg>=135 ){
      document.getElementById("windname1").innerHTML ='West';
    }
    else if(data.list[0].wind.deg<315 && data.list[0].wind.deg>=225 ){
      document.getElementById("windname1").innerHTML ='South';
    }

    document.getElementById("dateandtime2").innerHTML =data.list[1].dt_txt;
    document.getElementById("windspeed2").innerHTML =data.list[1].wind.speed+' m/s';
    document.getElementById("winddir2").innerHTML =data.list[1].wind.deg+'°';
    if(data.list[1].wind.deg<45){
      document.getElementById("windname2").innerHTML ='East';
    }
    else if(data.list[0].wind.deg>=315 ){
      document.getElementById("windname2").innerHTML ='East';
    }
    else if(data.list[1].wind.deg<135 && data.list[0].wind.deg>=45 ){
      document.getElementById("windname2").innerHTML ='North';
    }
    else if(data.list[1].wind.deg<225 && data.list[0].wind.deg>=135 ){
      document.getElementById("windname2").innerHTML ='West';
    }
    else if(data.list[1].wind.deg<315 && data.list[0].wind.deg>=225 ){
      document.getElementById("windname2").innerHTML ='South';
    }

    document.getElementById("dateandtime3").innerHTML =data.list[2].dt_txt;
    document.getElementById("windspeed3").innerHTML =data.list[2].wind.speed+' m/s';
    document.getElementById("winddir3").innerHTML =data.list[2].wind.deg+'°';
    if(data.list[2].wind.deg<45){
      document.getElementById("windname3").innerHTML ='East';
    }
    else if(data.list[0].wind.deg>=315){
      document.getElementById("windname3").innerHTML ='East';
    }
    else if(data.list[2].wind.deg<135 && data.list[0].wind.deg>45 ){
      document.getElementById("windname3").innerHTML ='North';
    }
    else if(data.list[2].wind.deg<225 && data.list[0].wind.deg>=135 ){
      document.getElementById("windname3").innerHTML ='West';
    }
    else if(data.list[2].wind.deg<315 && data.list[0].wind.deg>=225 ){
      document.getElementById("windname3").innerHTML ='South';
    }

    document.getElementById("dateandtime4").innerHTML =data.list[3].dt_txt;
    document.getElementById("windspeed4").innerHTML =data.list[3].wind.speed+' m/s';
    document.getElementById("winddir4").innerHTML =data.list[3].wind.deg+'°';
    if(data.list[0].wind.deg>=315 ){
      document.getElementById("windname4").innerHTML ='East';
    }
    else if(data.list[3].wind.deg<45){
      document.getElementById("windname4").innerHTML ='East';
    }
    else if(data.list[3].wind.deg<135 && data.list[0].wind.deg>=45 ){
      document.getElementById("windname4").innerHTML ='North';
    }
    else if(data.list[3].wind.deg<225 && data.list[0].wind.deg>=135 ){
      document.getElementById("windname4").innerHTML ='West';
    }
    else if(data.list[3].wind.deg<315 && data.list[0].wind.deg>=225 ){
      document.getElementById("windname4").innerHTML ='South';
    }

    lat = '51.509865'
    long = '-0.118092'
    country=''
  })
  .catch(function () {
    // errors
  })
}