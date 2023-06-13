import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';


const Forecast = () => {
    const [city, setCity] = useState("")
    const [days, setDays] = useState("")
    // const [forecast, setForecast] = useState()

    const weather = useSelector((state) => state.weather.weather)
    const dispatch = useDispatch()

    const setWeather = (event) => {
        event.preventDefault();
        switch (event.target.name) {
            case 'city':
                setCity(event.target.value);
                break;
            case 'days':
                setDays(event.target.value);
                break;
            default:
                break;
        }
    }

    const getWeather = (event) => {
        event.preventDefault()
        dispatch(fetchWeather(city, days))
    }

    let location
    let current
    console.log(weather.location)
    // let threeday
  
    if (weather.location) {
      location = weather["location"]
      current = weather["current"]
    //   threeday = forecast["forecast"]['forecastday']

    }

    return (
        <div>
            <form>
                <label htmlFor="city">City:</label><br />
                <input type="text" id="city" name="city" onChange={setWeather}></input><br />
                <label htmlFor="days">Days:</label><br />
                <input type="text" id="days" name="days" onChange={setWeather}></input><br />
                <input type="submit" value="Submit" onClick={getWeather} />
            </form>
            {weather.location ? (<div>It is currently {current["temp_f"]} degrees fahrenheit and {current["condition"]["text"]} in {location["name"]}, {location["country"]}</div>) : null}
        </div>
    )
}

export default Forecast;