import { useSelector } from "react-redux"
import EachHour from "./EachHour"

const Hourly = () => {
    const { weather } = useSelector((state) => state.weather)

    let eachHour = []
    
    if(weather.location) {
        let hours = weather.forecast.forecastday[0].hour

        for(let i = 0; i < hours.length; i++) {
            eachHour.push(<EachHour time={hours[i].time} temp={hours[i].temp_f} icon={hours[i].condition.icon} rainChance={hours[i].chance_of_rain} key={i}/>)
        }
    }

    return (
        <div> 
            <ul>
                {eachHour}
            </ul>
        </div>
    )
}

export default Hourly