# weather-api
This project is a weather dashboard, it will allow you to search for the weather information by city. This project focuses on the use of API's. With the use of API's you can call on information not is not stored on your computer and use that information on your webpage. 
# no install, no wait

This file works on any webpage, so the viewing of this project is as simple as following the link listed below.
https://tussingj89.github.io/weather-api

# api calling

Below is a sample of the code, with the use of API's you can call information that is not stored on your computer to add that information to your webpage.

$("#date1").text(response.list[1].dt_txt);

$("#currentImg1").attr("src", "https://openweathermap.org/img/w/" + response.list[1].weather[0].icon + ".png" );

var tempF1 = (response.list[1].main.temp - 273.15) * 1.80 + 32;
     
$("#temperature1").text("Temperature: " + tempF1.toFixed(2) + " F");
     
$("#humidity1").text("Humidity: " + response.list[1].main.humidity + " %");

# credit
weather API sourced from: https://openweathermap.org/

# snapshot of the webpage

![day-planner](assets/snapshot.png)
