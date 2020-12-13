// variables and url calls 
var cityInput = $("#city-input");
var search = $("#go");
var history = $("#history")
var clearHistory = ("#clear-Button")
var cityName = $("#city-name");
var currentImg = $("#currentImg");
var temp = $("#temperature");
var humidity = ("#humidity");
var windSpeed = $("#windSpeed");
var UVIndex = $("#UV-index");
// var currentDate = 
var queryURL= "api.openweathermap.org/data/2.5/forecast?q=decatur&appid=fba36da2ac563b2d05033368e455a294";



var status = "Fahrenheit";
var historystorage = [];

search.on('click', function(event) {
    event.preventDefault();
        citySearch($(this).text());
});

function citySearch() {
    

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    console.log(response);
    console.log(queryURL);

    cityName = $("<h2>").text(response.name);
    //  = cityInput.append(" " + mainDate);
    temp= $("<p>").text("Tempraturer: " + response.main.temp);
    humidity = $("<p>").text("Humidity: " + response.main.humidity);
    windSpeed = $("<p>").text("Wind Speed: " + response.wind.speed);
    // UVIndex = $("<p>").text("UV Index: " + response.)
    var currentweather = response.weather[0].main;

    if (currentweather === "Rain") {
        var currentImg = $('<img>').attr("src", "http://openweathermap.org/img/wn/09d.png");
        currentImg.attr("style", "height: 60px; width: 60px");
    }
    else if (currentweather === "Clouds") {
        var currentImg = $('<img>').attr("src", "http://openweathermap.org/img/wn/03d.png");
        currentImg.attr("style", "height: 60px; width: 60px");
    } 
    else if (currentweather === "Clear") {
        var currentImg = $('<img>').attr("src", "http://openweathermap.org/img/wn/01d.png");
        currentImg.attr("style", "height: 60px; width: 60px");
    }
    else if (currentweather === "Drizzle") {
        var currentImg = $('<img>').attr("src", "http://openweathermap.org/img/wn/10d.png");
        currentImg.attr("style", "height: 60px; width: 60px");
    }
    else if (currentweather === "Snow") {
        var currentImg = $('<img>').attr("src", "http://openweathermap.org/img/wn/13d.png");
        currentImg.attr("style", "height: 60px; width: 60px");
     }
});
}
