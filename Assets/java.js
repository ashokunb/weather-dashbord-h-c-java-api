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
                    console.log(longitude,latitude);
                    var oneCallApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=imperial' + '&appid=68452c2fbfaea6192b362a49b9ef2f1f'
                    

                    fetch(oneCallApi)
                    .then(function(response){
                        response.json().then(function(data){
                            console.log(data);
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
    
    repoSearch.textContent = searchTerm //placeholder for date;

    for (var i = 0; i <repos.lenght; i++) {

        //gets the temperature from the api and replaces the text
        var TempPlaceholder = document.querySelector("#temp-placeholder");
        var reposTemp = repos[i].main.weather;
        TempPlaceholder.innerHTML = reposTemp;

        //gets the wind from the api and replaces the text
        //gets the humidity from the api and replaces the text
        //gets the UV-index from the api and replaces the text
    }
    //gets the temperature from the api and replaces the text
    var TempPlaceholder = document.querySelector("#temp-placeholder");
    var reposTemp = repos.current.temp;
    TempPlaceholder.innerHTML = "Temperature:  " + reposTemp + " ℉";

    //gets the humidity from the api and replaces the text
    var TempPlaceholder = document.querySelector("#wind-placeholder");
    var reposWind = repos.current.humidity;
    TempPlaceholder.innerHTML = "Wind:  :  " + reposWind + " mph";

    //gets the UV-index from the api and replaces the text
    var TempPlaceholder = document.querySelector("#uv-placeholder");
    var reposUV = repos.current.uvi;
    TempPlaceholder.innerHTML = "UV-Index  :  " + reposUV;

    getFiveDay = function(fiveDay) {
        longitude = repos.lon;
        latitude =  repos.lat;

        var fiveDayAPI ='https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=68452c2fbfaea6192b362a49b9ef2f1f'

        fetch(fiveDayAPI)
            .then(function(response){
                if (response.ok) {
                    response.json().then(function(data){
                        console.log(data);
                        
                    });
                }
            })
        
    }; getFiveDay();
    
};

userFormEl.addEventListener('submit', formSubmitHandler);