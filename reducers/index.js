import { combineReducers } from 'redux';
 
const dataWeatherReducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_WEATHER":
            return { ...state, weather: action.weather };
        case "ERROR_WEATHER":
         	return { ...state, weather: action.weather };
        default:
            return state;
    }
};
 
const rootReducer = combineReducers({
    weather: dataWeatherReducer
    
})
 
export default rootReducer;