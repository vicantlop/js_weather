import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';
import WeatherCard from './cards/WeatherCard';

import styled from 'styled-components';

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Search = () => {
    const [city, setCity] = useState("")

    const { cities } = useSelector((state) => state.weather)
    const dispatch = useDispatch()

    const setWeather = (event) => {
        event.preventDefault();
        setCity(event.target.value);
    }

    const getWeather = async (event) => {
        event.preventDefault()
        dispatch(fetchWeather(city))
    }

    let cards = []



    if (cities.length) {
        for (let i = 0; i < cities.length; i++) {
            cards.push(<WeatherCard key={i} city={cities[i].location.name} index={i} />)
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="city">City:</label><br />
                <input type="text" id="city" name="city" onChange={setWeather}></input><br />
                <input type="submit" value="Submit" onClick={getWeather} />
            </form>
            <CardsContainer>
                {cards}
            </CardsContainer>
        </div>
    )
}

export default Search;