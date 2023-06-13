import axios from 'axios';
import { useState } from 'react';


const Forecast = () => {
    const [city, setCity] = useState("")
    const [days, setDays] = useState("")
    const [forecast, setForecast] = useState()

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
        console.log(city, days)
        console.log(typeof days)
    }

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {
            q: `${city}`,
            days: `${days}`
        },
        headers: {
            'X-RapidAPI-Key': `${process.env.REACT_APP_APIKEY}`,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    const getWeather = async (event) => {
        console.log(city, days)
        event.preventDefault()
        console.log(options)

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setForecast(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    let location
    let current
    let threeday
    
    console.log(process.env.REACT_APP_APIKEY)
  
    if (forecast) {
      location = forecast["location"]
      current = forecast["current"]
      threeday = forecast["forecast"]['forecastday']
  
      console.log(`It is currently ${current["temp_f"]} degrees fahrenheit and ${current["condition"]["text"]} in ${location["name"]}, ${location["country"]}`)
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
            {forecast ? (<div>It is currently {current["temp_f"]} degrees fahrenheit and {current["condition"]["text"]} in {location["name"]}, {location["country"]}</div>) : null}
        </div>
    )
}

export default Forecast;