// id dua270@naver.com pw alstjd12!
// 키 7dc7576b96fd893f52e7e5bf7f883448

const MY_API_KEY = "7dc7576b96fd893f52e7e5bf7f883448";
let weatherIcon = {
    '01' : 'fa-solid fa-sun',
    '02' : 'fa-duotone fa-sun-cloud',
    '03' : 'fa-duotone fa-clouds',
    '04' : 'fa-duotone fa-cloud-meatball',
    '09' : 'fa-duotone fa-cloud-sun-rain',
    '10' : 'fa-cloud-showers-heavy',
    '11' : 'fa-duotone fa-poo-storm',
    '13' : 'fa-duotone fa-snowflake',
    '50' : 'fa-duotone fa-smog'
}

const weatherNav =  navigator.geolocation.watchPosition(liveGeo,liveGeoErr)
const weatherText = document.getElementById("weather");
function liveGeo(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?&lang=kr&lat=${lat}&lon=${long}&appid=${MY_API_KEY}&units=metric`).then(res=>res.json()).then(data=>{
            const city = `${data.name}`;

            const weather  = `${data.weather[0].description}`;
            const WTemp = `${data.main.temp}`
            const wIcon = (data.weather[0].icon).substr(0,2);
            weatherText.innerHTML =
            `
                <div class="weathers">${city}</div>
                <div class="weathers"><i class="${weatherIcon[wIcon]}"></i> ${weather}</div>
                <div class="weathers">${Math.floor(WTemp)}℃</div>
            `;
        }
    )
    
}

function liveGeoErr(){
    alert("위치를 찾지 못했습니다...")
}

export default weatherText;