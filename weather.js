const api = {
    key : '15356d16af69f3346d31af21d2f1311d',
    baseurl : 'https://api.openweathermap.org/data/2.5',
    flagapi : 'https://countryflagsapi.com/png'
}
const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keypress' ,   setQuery );
function setQuery(event){
    if(event.keyCode == 13){
        getResults(searchBox.value)
      }
}
// window.onload = function() {
//     fetch(`${api.baseurl}/weather?q=${`uzbekistan`}&units=metric&APPID=${api.key}`)
//      .then((weather) =>{
//          return weather.json();
//      })0
//      .then(displayResults)


//   };


function getResults(query) { 
    fetch(`${api.baseurl}/weather?q=${query}&units=metric&APPID=${api.key}`)
     .then((weather) =>{
         if (weather.status === 400) {
             alert("Davlat nomi kiritilmadi !!") 
         }
        else  if (weather.ok === false) {
            alert("Bunday Davlat mavjud emas");
          }
        else{ 
            return weather.json() 
        }
     })
     .then(displayResults)
     .catch() 
     /////   api flag

  

}




function displayResults(weather) {
    document.querySelector('.temp').innerHTML = `${ Math.round( weather.main.temp) } <span>°C</span>`  
    document.querySelector('.hi-low').innerHTML = `${weather.main.feels_like} <span>°C</span> | ${weather.main.temp_max} <span>°C</span>`  
    document.querySelector('.temp').innerHTML = `${weather.main.temp} <span>°C</span>`  
    document.querySelector('.city').innerHTML = `${(weather.name).toUpperCase()}`;
    var iconurl = "http://openweathermap.org/img/w/" + `${weather.weather[0].icon}` + ".png";
    document.querySelector('.weather').style.backgroundImage = `url(${iconurl})`;
    console.log();
    console.log(weather);


    const d = new Date();
    let dates =   document.querySelector('.date') ;
    let hafta = ["Monday" , 'Tuesday' , "Wednesday" , "Thursday" , "Friday" , 'Saturday' , 'Sunday']
    let oy = ['January' , 'February' , "March" , "April" , 'May' , "June" , 'July' , "August" , "September" , 'October' , 'November' , 'December']
    dates.innerHTML = `${d.getDate()}-${ oy[d.getMonth()]}  ${hafta[d.getDay()] } ${d.getFullYear()} `
    console.log(dates.innerHTML);
}



