import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';
import WeatherCard from './cards/WeatherCard';
import { clearList, fetchAutocompleteList } from '../reducers/autocompleteSlice';
import AutocompleteList from './AutocompleteList';

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
        } else if ( event.target.value.length < 3 && autocompleteList.length > 0) {
            dispatch(clearList())
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
    let list = []
    if (autocompleteList.length > 0) {
        for (let i = 0; i < autocompleteList.length && i < 3; i++) {
            list.push(<AutocompleteList key={i} city={autocompleteList[i].name} region={autocompleteList[i].region} country={autocompleteList[i].country}/>)
        }
    }
    return (
        <div>
            <form>
                <label htmlFor="city">City:</label><br />
                <input type="text" id="city" className="dropdown-trigger" data-target='dropdown1' name="city" onChange={setWeather}></input><br />
                <input type="submit" id="citySubmit" value="Submit" onClick={getWeather} />
                <ul id='dropdown1' className='dropdown-content'>
                    {list}
                </ul>
            </form>
            <CardsContainer>
                {cards}
            </CardsContainer>
        </div>
    )
}

export default Search;