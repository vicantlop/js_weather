import { useSelector } from "react-redux";

const Today = () => {
    const { weather } = useSelector((state) => state.weather)

    let current
    let location
    
    if(weather.location) {
        current = weather.current
        location = weather.location
    }

    return (
        <div>
            <div>
                {location.name}, {location.region} as of {location.localtime}
            </div>
            <div>
                {current.condition.text} <img src={current.condition.icon} alt="condition icon"></img>
            </div>
            <div>
                {current.feelslike_f}
            </div>
        </div>
    )
}

export default Today;