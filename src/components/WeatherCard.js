import { useSelector } from "react-redux";

const WeatherCard = () => {
    const weather = useSelector((state) => state.weather.weather)
    
    let location
    let current
  
    if (weather.location) {
      location = weather["location"]
      current = weather["current"]
    }
    
    return (
        <div className="card">
            <img src={weather.current.condition.icon} alt="calexico"/>
            <div>It is currently {current["temp_f"]} degrees fahrenheit and {current["condition"]["text"]} in {location["name"]}, {location["country"]}</div>
            <div>tomorrow is {weather.forecast.forecastday[0].day.avgtemp_f}</div>
        </div>
    )
}

export default WeatherCard;