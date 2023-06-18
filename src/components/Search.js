import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';
import WeatherCard from './cards/WeatherCard';

const Search = () => {
    const [city, setCity] = useState("")

    const { cities } = useSelector((state) => state.weather)
    const dispatch = useDispatch()

    const setWeather = (event) => {
        event.preventDefault();
        setCity(event.target.value);
    }

    const getWeather = async(event) => {
        event.preventDefault()
        dispatch(fetchWeather(city))
    }

    let cards = []

    if(cities.length) {
        for(let i = 0; i < cities.length; i++) {
            cards.push(<WeatherCard key={i} city={cities[i].location.name} index={i}/>)
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="city">City:</label><br />
                <input type="text" id="city" name="city" onChange={setWeather}></input><br />
                <input type="submit" value="Submit" onClick={getWeather} />
            </form>
            {cards}
        </div>
    )
}

export default Search;