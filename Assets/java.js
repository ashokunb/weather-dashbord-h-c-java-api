var userFormEl = document.querySelector('#user-form');
var cityInputE1 = document.querySelector('#search');
var clearContainerE1 = document.querySelector('#clear')

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

var getCityInfo = function() {
    console.log('hello world')
}

userFormEl.addEventListener('submit', formSubmitHandler);