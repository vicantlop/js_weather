import { useSelector } from "react-redux";
import CardNavbar from "./CardNavbar";
import Today from "./Today";
import ThreeDay from "./ThreeDay";
import Hourly from "./Hourly";
import styled from "styled-components";

const Card = styled.div`
    height: 300px;
    width: 300px;
    overflow: scroll;
`

const WeatherCard = ({index}) => {
    const selection = useSelector((state) => state.weather.cities[index].selected)

    let selected

    switch(selection) {
        case ("today"):
            selected = (<Today i={index}/>)
            break;
        case ("hourly"):
            selected = (<Hourly i={index}/>)
            break;
        case ("3-day"):
            selected = (<ThreeDay i={index}/>)
            break;
        default:
            selected = (<Today i={index}/>)
    }

    return (
        <Card className="card">
            <CardNavbar i={index}/>
            {selected ? selected : null}
        </Card>
    )
}

export default WeatherCard;