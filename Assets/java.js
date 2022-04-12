var userFormEl = document.querySelector('#user-form');
var cityInputE1 = document.querySelector('#search');
var clearContainerE1 = document.querySelector('#clear');
var repoSearch = document.querySelector("#repo-search");

var TempPlaceholder = document.querySelector("#temp-placeholder");

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
    var apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=68452c2fbfaea6192b362a49b9ef2f1f"

    fetch(apiUrl)
        .then(function(response){
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayCity(data, city);
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
    
    repoSearch.textContent = searchTerm;

    for (var i = 0; i <repos.lenght; i++) {

        //gets the temperature from the api and replaces the text
        var reposTemp = "hello"//repos[i].main.weather;
        TempPlaceholder.innerHTML = reposTemp;


    };
    
    
};

userFormEl.addEventListener('submit', formSubmitHandler);