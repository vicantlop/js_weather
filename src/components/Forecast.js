import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';
import WeatherCard from './WeatherCard';

const Forecast = () => {
    const [city, setCity] = useState("")
    const [days, setDays] = useState("")

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

    const getWeather = async(event) => {
        event.preventDefault()
        dispatch(fetchWeather(city, days))
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
            {weather.location ? (<WeatherCard />) : null}
        </div>
    )
}

export default Forecast;

// forecast.forecastday[0].day.condition.icon