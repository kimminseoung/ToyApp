// id dua270@naver.com pw alstjd12!
// 키 7dc7576b96fd893f52e7e5bf7f883448

const MY_API_KEY = "7dc7576b96fd893f52e7e5bf7f883448";

const weatherNav =  navigator.geolocation.watchPosition(liveGeo,liveGeoErr)
const weatherText = document.getElementById("weather");
function liveGeo(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?&lang=kr&lat=${lat}&lon=${long}&appid=${MY_API_KEY}&units=metric`).then(res=>res.json()).then(data=>{
            const city = `${data.name}`;
            const weather  = `${data.weather[0].description}`;
            const WTemp = `${data.main.temp}`
            weatherText.innerHTML =
            `
                <div class="weathers">${city}</div>
                <div class="weathers">${weather}</div>
                <div class="weathers">${Math.floor(WTemp)}℃</div>
            `;
        }
    )
    
}

function liveGeoErr(){
    alert("위치를 찾지 못했습니다...")
}

export default weatherText;