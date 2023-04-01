let weatherForm = document.querySelector('.weather_form')
let inputCity = document.querySelector('.weather_city')
let apiDataContainer = document.querySelector('.weather_data')

let apiUrl = 'http://api.weatherapi.com/v1/current.json?key=2e6699f6eab44588813131232230104%20&aqi=yes&q='

weatherForm.addEventListener('submit', (event) => {
    let city = inputCity.value;
    let fullApiUrl = apiUrl + city

    fetch(fullApiUrl).then(response => response.json()).then((dataFromApi) => {
        //console.log(dataFromApi.current.temp_c)
        let view = ``
        //view += `W ${dataFromApi.location.name} jest dzisiaj ${dataFromApi.current.temp_c} stopni celcjusza`
        view += `<div class="weather__info">`

        //icon
        view += '<div class=weather__icon">img src="${dataFromApi.current.condition.icon}' alt='${dataFromApi.current.city'</div>'
        //temp
        view += '<div class='weather__temp>'
        //details
        view += `<div class="weather__details">
                <p>The amount of rainfall: ${dataFromApi.current.precip_mm}mm </p>
                <p>Humidity: ${dataFromApi.current.humidity}%</p>
                <p>Wind: ${dataFromApi.current.wind_kph}km/h</p>
            </div>`;

        ${dataFromApi.current.temp_c}<span>
        &deg C;
        </span>

        apiDataContainer.innerHTML = view
    })

    event.preventDefault()
})