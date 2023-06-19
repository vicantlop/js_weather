import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';
import WeatherCard from './cards/WeatherCard';

// import axios from 'axios';

import styled from 'styled-components';

// let location

// try {
//     const response = await axios.request({
//         method: 'GET',
//         url: 'http://api.ipify.org/?format=json'
//     })
//     location = await axios.request({
//         method: 'GET',
//         url: 'https://weatherapi-com.p.rapidapi.com/ip.json',
//         params: {q: response.data.ip},
//         headers: {
//           'X-RapidAPI-Key': `${process.env.REACT_APP_WEATHER_APIKEY}`,
//           'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//         }
//     });
// } catch (error) {
//     console.error(error);
// }

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Search = () => {
    const [city, setCity] = useState("")

    const { cities } = useSelector((state) => state.weather)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     console.log(location.data)
    //     let coordinates = `${location.data.lat},${location.data.lon}`
    //     dispatch(fetchWeather(coordinates))
    // }, [])

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
        for (let i = cities.length - 1; i > -1; i--) {
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