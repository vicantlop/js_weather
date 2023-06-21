import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';
import WeatherCard from './cards/WeatherCard';
import { clearList, fetchAutocompleteList } from '../reducers/autocompleteSlice';
import AutocompleteList from './AutocompleteList';
import M from 'materialize-css'
import styled from 'styled-components';

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Search = () => {
    const [city, setCity] = useState("")

    const { cities } = useSelector((state) => state.weather)
    const { autocompleteList } = useSelector((state) => state.autocompleteList)
    const { cityCoordinates } = useSelector((state) => state.autocompleteList)
    const dispatch = useDispatch()

    useEffect(() => {
        document.getElementById("citySubmit").disabled = true;
    }, [])

    const setWeather = (event) => {
        event.preventDefault();
        setCity(event.target.value);
        if (event.target.value.length > 2) {
            dispatch(fetchAutocompleteList(event.target.value))
        } else if ( event.target.value.length < 3 && autocompleteList.length > 0) {
            dispatch(clearList())
        }
    }

    const getWeather = (event) => {
        event.preventDefault()
        dispatch(fetchWeather(cityCoordinates))
        document.getElementById("city").value = "";
        document.getElementById("citySubmit").disabled = true;
        dispatch(clearList())
    }

    let cards = []
    if (cities.length) {
        for (let i = cities.length - 1; i > -1; i--) {
            cards.push(<WeatherCard key={i} city={cities[i].location.name} index={i} />)
        }
    }

    console.log(city)
    let list = []
    if (autocompleteList.length > 0) {
        for (let i = 0; i < autocompleteList.length && i < 3; i++) {
            list.push(<AutocompleteList key={i} city={autocompleteList[i].name} region={autocompleteList[i].region} country={autocompleteList[i].country} lat={autocompleteList[i].lat} lon={autocompleteList[i].lon}/>)
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="city">City:</label><br />
                <input type="text" id="city" className="dropdown-trigger" data-target='dropdown1' name="city" onChange={setWeather}></input><br />
                <input type="submit" id="citySubmit" value="Submit" onClick={getWeather} />
                <ul id='dropdown1' className='dropdown-content'>
                    <li>hello</li>
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

// import axios from 'axios';

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

    // useEffect(() => {
    //     console.log(location.data)
    //     let coordinates = `${location.data.lat},${location.data.lon}`
    //     dispatch(fetchWeather(coordinates))
    // }, [])

        // document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.dropdown-trigger');
    //     var instances = M.Dropdown.init(elems, options);
    //   });
    // const drop = () => {
    //     var instance = M.Dropdown.getInstance(document.getElementById("dropdown1"))
    //     console.log(document.getElementById("dropdown1"))
    //     console.log(instance)
    // }