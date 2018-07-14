import axios from 'axios';

export function fetchWeather(city) {

  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=83c6ba4dd07d83514536821a8a51d6d5`;
  
  return function (dispatch) {
    axios.get(API_URL, {})
      .then(response => {
        dispatch({
          type: "FETCH_WEATHER",
          weather: response.data,
        });
      })
      .catch(error => {
      	dispatch({
          type: "ERROR_WEATHER",
          weather: error.response.data.message,
        });
      });
  }
}