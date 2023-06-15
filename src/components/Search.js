import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';
import WeatherCard from './cards/WeatherCard';

const Search = () => {
    const [city, setCity] = useState("")

    const {weather} = useSelector((state) => state.weather)
    const dispatch = useDispatch()

    const setWeather = (event) => {
        event.preventDefault();
        setCity(event.target.value);
    }

    const getWeather = async(event) => {
        event.preventDefault()
        dispatch(fetchWeather(city))
    }

    return (
        <div>
            <form>
                <label htmlFor="city">City:</label><br />
                <input type="text" id="city" name="city" onChange={setWeather}></input><br />
                <input type="submit" value="Submit" onClick={getWeather} />
            </form>
            {weather.location ? (<WeatherCard />) : null}
        </div>
    )
}

export default Search;