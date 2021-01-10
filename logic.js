// variables and url calls 
var mainDate = moment().format("M/D/YYYY");
var citylist = [];


// event listeners
$("#go").on("click", function (event) {
    event.preventDefault();
    var cityId = $("#city-input").val();
    citySearch(cityId);
    var textContent = $(this).siblings("input").val();
    citylist.push(textContent);
    localStorage.setItem('cityName', JSON.stringify(citylist));
    $("#history").empty();
    historyButton();
});
function historyButton(){
var lastSearch = JSON.parse(localStorage.getItem("cityName"));
for (var i = 0; i < lastSearch.length; i++){
var searchDiv = $("<button class='btn border text-muted mt-1 shadow-sm bg-white rounded' style='width: 12rem;'>").text(lastSearch[i]);
var psearch = $("<div>");
psearch.append(searchDiv);
$("#history").prepend(psearch);
}
}

$("#history").on("click", function(event) {
    event.preventDefault();
    var cityId = $(this).text();
    citySearch(cityId);
});
$("#clear-Button").on("click", function(event) {
    localStorage.clear();
    location.reload();
});

// functions
function citySearch(cityId) {
    

    var queryURL= "https://api.openweathermap.org/data/2.5/forecast?q=" + cityId + "&appid=fba36da2ac563b2d05033368e455a294";
 //ajax call for the weather   
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    console.log(response);
    console.log(queryURL);
    $("#city-name").html("<h1>" + response.city.name + " " + mainDate);
    var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    $("#temperature").text("Temperature: " + tempF.toFixed(2) + " F");
    $("#windSpeed").text("Wind Speed: " + response.list[0].wind.speed + " MPH");
    $("#humidity").text("Humidity: " + response.list[0].main.humidity + " %");
    $("#currentImg").attr("src", "https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png" );

    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    
    //  uv-iNDEX Call for
     var UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=fba36da2ac563b2d05033368e455a294&cnt=1";
     $.ajax({
        url: UVQueryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        console.log(queryURL);
        $("#UV-index").text("UV_Index: " + response[0].value);
     });

    //  5 day forecast 
     $("#date1").text(response.list[1].dt_txt);
     $("#currentImg1").attr("src", "https://openweathermap.org/img/w/" + response.list[1].weather[0].icon + ".png" );
     var tempF1 = (response.list[1].main.temp - 273.15) * 1.80 + 32;
     $("#temperature1").text("Temperature: " + tempF1.toFixed(2) + " F");
     $("#humidity1").text("Humidity: " + response.list[1].main.humidity + " %");

     $("#date2").text(response.list[9].dt_txt);
     $("#currentImg2").attr("src", "https://openweathermap.org/img/w/" + response.list[9].weather[0].icon + ".png" );
     var tempF2 = (response.list[9].main.temp - 273.15) * 1.80 + 32;
     $("#temperature2").text("Temperature: " + tempF2.toFixed(2) + " F");
     $("#humidity2").text("Humidity: " + response.list[9].main.humidity + " %");
     
     $("#date3").text(response.list[17].dt_txt);
     $("#currentImg3").attr("src", "https://openweathermap.org/img/w/" + response.list[17].weather[0].icon + ".png" );
     var tempF3 = (response.list[17].main.temp - 273.15) * 1.80 + 32;
     $("#temperature3").text("Temperature: " + tempF3.toFixed(2) + " F");
     $("#humidity3").text("Humidity: " + response.list[17].main.humidity + " %");
     
     $("#date4").text(response.list[25].dt_txt);
     $("#currentImg4").attr("src", "https://openweathermap.org/img/w/" + response.list[25].weather[0].icon + ".png" );
     var tempF4 = (response.list[25].main.temp - 273.15) * 1.80 + 32;
     $("#temperature4").text("Temperature: " + tempF4.toFixed(2) + " F");
     $("#humidity4").text("Humidity: " + response.list[25].main.humidity + " %");
     
     $("#date5").text(response.list[33].dt_txt);
     $("#currentImg5").attr("src", "https://openweathermap.org/img/w/" + response.list[33].weather[0].icon + ".png" );
     var tempF5 = (response.list[33].main.temp - 273.15) * 1.80 + 32;
     $("#temperature5").text("Temperature: " + tempF5.toFixed(2) + " F");
     $("#humidity5").text("Humidity: " + response.list[33].main.humidity + " %");
     
});
}
