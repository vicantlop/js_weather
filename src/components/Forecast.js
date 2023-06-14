import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';
import { fetchImages } from '../reducers/imagesSlice';


const Forecast = () => {
    const [city, setCity] = useState("")
    const [days, setDays] = useState("")

    const weather = useSelector((state) => state.weather.weather)
    const images = useSelector((state) => state.images.images)
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
        // let lat = data.payload.location.lat
        // let lng = data.payload.location.lon
    
        // dispatch(fetchImages(lat,lng))
    }

    let location
    let current
  
    if (weather.location) {
      location = weather["location"]
      current = weather["current"]
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
            {weather.location ? (<img src={weather.current.condition.icon} alt="calexico"/>) : null}
            {weather.location ? (<div>It is currently {current["temp_f"]} degrees fahrenheit and {current["condition"]["text"]} in {location["name"]}, {location["country"]}</div>) : null}
            {weather.location ? (<div>tomorrow is {weather.forecast.forecastday[0].day.avgtemp_f}</div>) : null}
            {/* {weather.location ? (<div>the next day is {weather.forecast.forecastday[1].day.avgtemp_f}</div>) : null} */}
        </div>
    )
}

export default Forecast;

// forecast.forecastday[0].day.condition.icon