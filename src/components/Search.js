import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';
import WeatherCard from './cards/WeatherCard';
import { fetchAutocompleteList } from '../reducers/autocompleteSlice';

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
    const { autocompleteList } = useSelector((state) => state.autocompleteList)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     console.log(location.data)
    //     let coordinates = `${location.data.lat},${location.data.lon}`
    //     dispatch(fetchWeather(coordinates))
    // }, [])
    useEffect(() => {
        document.getElementById("citySubmit").disabled = true;
    }, [])

    const setWeather = (event) => {
        event.preventDefault();
        setCity(event.target.value);
        if (event.target.value) {
            document.getElementById("citySubmit").disabled = false;
        } else {
            document.getElementById("citySubmit").disabled = true;
        }
        if (event.target.value.length > 2) {
            dispatch(fetchAutocompleteList(event.target.value))
        }
    }

    const getWeather = (event) => {
        event.preventDefault()
        dispatch(fetchWeather(city))
        document.getElementById("city").value = "";
        document.getElementById("citySubmit").disabled = true;
    }

    let cards = []
    if (cities.length) {
        for (let i = cities.length - 1; i > -1; i--) {
            cards.push(<WeatherCard key={i} city={cities[i].location.name} index={i} />)
        }
    }

    console.log(autocompleteList)

    return (
        <div>
            <form>
                <label htmlFor="city">City:</label><br />
                <input type="text" id="city" name="city" onChange={setWeather}></input><br />
                <input type="submit" id="citySubmit" value="Submit" onClick={getWeather} />
                <a class='dropdown-trigger btn' href='#/' data-target='dropdown1'>Drop Me!</a>

                {/* <!-- Dropdown Structure --> */}
                <ul id='dropdown1' class='dropdown-content'>
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li class="divider" tabindex="-1"></li>
                    <li><a href="#!">three</a></li>
                    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                </ul>
            </form>
            <CardsContainer>
                {cards}
            </CardsContainer>
        </div>
    )
}

export default Search;