// function DOMLoaded () {
    POTD();
// }

function POTD () {

    queryURL = "https://api.nasa.gov/planetary/apod?date=2020-11-19&api_key=YXG9udc8M5QLeqooH25qwm8pkJ7FE4wRikvXk2hL"

    fetch(queryURL)
        .then(response => response.json())
        .then(data => console.log(data));
    //Jacobs API key = YXG9udc8M5QLeqooH25qwm8pkJ7FE4wRikvXk2hL
}