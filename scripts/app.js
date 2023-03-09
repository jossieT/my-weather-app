const form = document.querySelector('form');
const dis = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) =>{
      const cityDet = data.cityDets;
      const weather = data.weather;
      console.log("Update UI called");
      details.innerHTML = `
      <h5 class="my-3">${cityDet.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="my-4 display-4">
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
      </div>`;


      const imgSrc = `img/icons/${weather.WeatherIcon}.svg`;
      icon.setAttribute('src', imgSrc);

      if(dis.classList.contains('d-none')){
      dis.classList.remove('d-none');
            console.log("Remove Done");
      }
      let timeSrc = null;

      if(weather.IsDayTime){
        timeSrc = 'img/day.svg';
      }
      else{
        timeSrc = 'img/night.svg';
      }
      time.setAttribute('src', timeSrc); 
};

const updateCity = async city =>{
    
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    console.log("Update City called");

    return {cityDets, weather}
};


form.addEventListener('submit',e =>{
    e.preventDefault();

    const cityName = form.city.value.trim();
    form.reset();
     
    updateCity(cityName).then( data =>{ updateUI(data);})
      .catch(err =>{ console.log(err)});
});
