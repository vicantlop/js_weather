import { useSelector } from "react-redux";
import EachDay from "./EachDay";

const ThreeDay = () => {
    const { weather } = useSelector((state) => state.weather)

    let forecast

    if (weather.location) {
        forecast = weather.forecast.forecastday
    }

    let days = []

    if (forecast) {
        for (let i = 0; i < forecast.length; i++) {
            days.push(<EachDay 
                key={i} 
                day={forecast[i].date} 
                high={forecast[i].day.maxtemp_f} 
                low={forecast[i].day.mintemp_f} 
                humidity={forecast[i].day.avghumidity} 
                sunrise={forecast[i].astro.sunrise} 
                sunset={forecast[i].astro.sunset} 
                moonrise={forecast[i].astro.moonrise}
                moonset={forecast[i].astro.moonset}
                rainChance={forecast[i].day.daily_chance_of_rain} 
                uv={forecast[i].day.uv} 
                icon={forecast[i].day.condition.icon}
                condition={forecast[i].day.condition.text} />)
        }
    }

    return (
        <div>
            {days}
        </div>
    )
}

export default ThreeDay;