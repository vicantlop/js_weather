import { useSelector } from "react-redux";
import CardNavbar from "./CardNavbar";
import Today from "./Today";
import ThreeDay from "./ThreeDay";
import Hourly from "./Hourly";

const WeatherCard = () => {
    const { selection } = useSelector((state) => state.cardSelection)

    let selected

    switch(selection) {
        case ("today"):
            selected = (<Today />)
            break;
        case ("hourly"):
            selected = (<Hourly />)
            break;
        case ("3-day"):
            selected = (<ThreeDay />)
            break;
        default:
            selected = (<Today />)
    }

    return (
        <div className="card">
            <CardNavbar />
            {selected ? selected : null}
        </div>
    )
}

export default WeatherCard;