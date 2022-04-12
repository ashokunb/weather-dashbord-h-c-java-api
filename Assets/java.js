var userFormEl = document.querySelector('#user-form');
var cityInputE1 = document.querySelector('#search');
var clearContainerE1 = document.querySelector('#clear');
var repoSearch = document.querySelector("#repo-search");


var formSubmitHandler = function(event){
    event.preventDefault()

    var search = cityInputE1.value.trim();

    if (search) {
        getCityInfo(search);

        //clear old content
        clearContainerE1.textContent = '';
        cityInputE1.value = '';
    } else {
        alert('Please enter a city'); // needs to be replaced with a modal
    }
};

var getCityInfo = function(city) {
    //api pulls from the weather api and changes the units to the imperial system.
    var apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=68452c2fbfaea6192b362a49b9ef2f1f"

    fetch(apiUrl)
        .then(function(response){
            if (response.ok) {
                response.json().then(function(data) {
                    var longitude = data.coord.lon;
                    var latitude = data.coord.lat;
                    var oneCallApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=imperial' + '&appid=68452c2fbfaea6192b362a49b9ef2f1f'
                    

                    fetch(oneCallApi)
                    .then(function(response){
                        response.json().then(function(data){
                            displayCity(data, city);
                        })
                    })
                });
            } 
            else {
                alert('Error: City not found');
            }
        })
        .catch(function(error){
            alert("Cannot connect to weather api");
        });
};

var displayCity = function(repos, searchTerm) {

    var currentTime = moment().format('MMM Do')
    repoSearch.textContent = searchTerm + ' / ' + currentTime //placeholder for date;

    //gets the temperature from the api and replaces the text
    var tempPlaceholder = document.querySelector("#temp-placeholder");
    var reposTemp = repos.current.temp;
    tempPlaceholder.innerHTML = "Temperature:  " + reposTemp + " ℉";

    //gets the wind from the api and replaces the text
    var windPlaceholder = document.querySelector("#wind-placeholder");
    var reposWind = repos.current.wind_speed;
    windPlaceholder.innerHTML = "Wind:  :  " + reposWind + " mph";

     //gets the humidity from the api and replaces the text
     var humidityPlaceholder = document.querySelector("#humidity-placeholder");
     var reposHumidity = repos.current.humidity;
     humidityPlaceholder.innerHTML = "Wind:  :  " + reposHumidity + " %";

    //gets the UV-index from the api and replaces the text
    var uvPlaceholder = document.querySelector("#uv-placeholder");
    var reposUV = repos.current.uvi;
    uvPlaceholder.innerHTML = "UV-Index  :  " + reposUV;

    
    getFiveDay = function(fiveDay) {
        longitude = repos.lon;
        latitude =  repos.lat;

        var fiveDayAPI ='https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=68452c2fbfaea6192b362a49b9ef2f1f' + '&units=imperial'

        fetch(fiveDayAPI)
            .then(function(response){
                if (response.ok) {
                    response.json().then(function(data){
                        
                        //moment api to get the future dates
                        var currentTimeOne = moment().add(1, 'days').format('MMM Do')
                        var currentTimeTwo = moment().add(2, 'days').format('MMM Do')
                        var currenttimeThree = moment().add(3, 'days').format('MMM Do')
                        var currentTimeFour = moment().add(4, 'days').format('MMM Do')
                        var currentTimeFive = moment().add(5, 'days').format('MMM Do')
                        
                        //gets data from api to create the first forecast
                        var tempOne = document.querySelector("#temp-one");
                        var windOne = document.querySelector("#wind-one")
                        var humidityOne = document.querySelector("#humidity-one")
                        var tempDataOne = data.list[1].main.temp;
                        var windDataOne = data.list[1].wind.speed
                        var humidityDataOne = data.list[1].main.humidity
                        var timeOne = document.querySelector('#time-one')
                        timeOne.innerHTML =  currentTimeOne;
                        tempOne.innerHTML = 'Temperature: ' + tempDataOne + '℉';
                        windOne.innerHTML = 'Wind:  ' + windDataOne + 'mph';
                        humidityOne.innerHTML = 'Humidity: ' + humidityDataOne;

                        //gets data from api to create the second forecast
                        var tempTwo = document.querySelector("#temp-two");
                        var windTwo = document.querySelector("#wind-two")
                        var humidityTwo = document.querySelector("#humidity-two")
                        var tempDataTwo = data.list[2].main.temp;
                        var windDataTwo = data.list[2].wind.speed
                        var humidityDataTwo = data.list[2].main.humidity
                        var timeTwo = document.querySelector('#time-two')
                        timeTwo.innerHTML =  currentTimeTwo;
                        tempTwo.innerHTML = 'Temperature: ' + tempDataTwo + '℉';
                        windTwo.innerHTML = 'Wind:  ' + windDataTwo + 'mph';
                        humidityTwo.innerHTML = 'Humidity: ' + humidityDataTwo;
                        

                        //gets data from api to create the third forecast
                        var tempThree = document.querySelector("#temp-three");
                        var windThree = document.querySelector("#wind-three")
                        var humidityThree = document.querySelector("#humidity-three")
                        var tempDataThree = data.list[3].main.temp;
                        var windDataThree = data.list[3].wind.speed
                        var humidityDataThree = data.list[3].main.humidity
                        var timeThree = document.querySelector('#time-three')
                        timeThree.innerHTML =  currenttimeThree;
                        tempThree.innerHTML = 'Temperature: ' + tempDataThree + '℉';
                        windThree.innerHTML = 'Wind:  ' + windDataThree + 'mph';
                        humidityThree.innerHTML = 'Humidity: ' + humidityDataThree;

                        //gets data from api to create the fourth forecast
                        var tempFour = document.querySelector("#temp-four");
                        var windFour = document.querySelector("#wind-four")
                        var humidityFour = document.querySelector("#humidity-four")
                        var tempDataFour = data.list[4].main.temp;
                        var windDataFour = data.list[4].wind.speed
                        var humidityDataFour = data.list[4].main.humidity
                        var timeFour = document.querySelector('#time-four')
                        timeFour.innerHTML =  currentTimeFour;
                        tempFour.innerHTML = 'Temperature: ' + tempDataFour + '℉';
                        windFour.innerHTML = 'Wind:  ' + windDataFour + 'mph';
                        humidityFour.innerHTML = 'Humidity: ' + humidityDataFour;

                        //gets data from api to create the fifth forecast
                        var tempFive = document.querySelector("#temp-five");
                        var windFive = document.querySelector("#wind-five")
                        var humidityFive = document.querySelector("#humidity-five")
                        var tempDataFive = data.list[5].main.temp;
                        var windDataFive = data.list[5].wind.speed
                        var humidityDataFive = data.list[5].main.humidity
                        var timeFive = document.querySelector('#time-five')
                        timeFive.innerHTML =  currentTimeFive;
                        tempFive.innerHTML = 'Temperature: ' + tempDataFive + '℉';
                        windFive.innerHTML = 'Wind:  ' + windDataFive + 'mph';
                        humidityFive.innerHTML = 'Humidity: ' + humidityDataFive;
                        
                    });
                }
            })
        
    }; getFiveDay();
    
};

userFormEl.addEventListener('submit', formSubmitHandler);