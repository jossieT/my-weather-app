
const key = 'MECacsAv4MBlWwbu8Ynzznwljn1mMPvA';

//get city weather information
const getWeather = async (id) => {
    
    console.log("get Weather function working");
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

// get city
const getCity = async (city) => {
    console.log("get city function working");
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};
