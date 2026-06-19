let cityInput = document.querySelector(".city-input");
let searchBtn = document.querySelector(".search-btn");
let locationn =document.querySelector(".jagah");
let temp = document.querySelector(".temperature");
let h = document.querySelector(".humidity");
let c = document.querySelector(".cloud");
let s =document.querySelector(".speed");
searchBtn.addEventListener("click",function(){
    if(cityInput.value.trim()===""){
        cityInput.value="";
        cityInput.placeholder = "please enter a city";
       cityInput.focus();
        // console.log("empty field");
        return;
    }
    let city =cityInput.value.trim();
   let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca555f4b4371ea1485440365281c60e8&units=metric`
   
   fetch(url)
   .then(Response=>Response.json())
   .then(data=>{
    if(data.cod==="404"){
        console.log("invalid city");
        locationn.textContent="city not found";
        locationn.style.color="red";
        return;
    }
    locationn.style.color="#4a4a4a";
    locationn.textContent=data.name;
    temp.textContent=`${data.main.temp}°C`;
    h.textContent=`${data.main.humidity}%`;
    c.textContent=data.weather[0].description;
    s.textContent=`${data.wind.speed}Km/h`;
    })
    .catch(error => {
      console.log(error);
    });
});
