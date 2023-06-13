import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import { useState } from 'react';



function App() {
  const [city, setCity] = useState("")
  const [days, setDays] = useState("")

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
      'X-RapidAPI-Key': '187b0ec4b7msh9909e74c3e40f95p17b4b6jsn67ee1ffae374',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  const getWeather = async (event) => {
    console.log(city,days)
    event.preventDefault()
    console.log(options)
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className="App">
      <form>
        <label htmlFor="city">City:</label><br/>
        <input type="text" id="city" name="city" onChange={setWeather}></input><br/>
        <label htmlFor="days">Days:</label><br/>
        <input type="text" id="days" name="days" onChange={setWeather}></input><br/>
        <input type="submit" value="Submit" onClick={getWeather}/>
      </form>
    </div>
  );
}

export default App;
