import { setCardNavbar } from "../../reducers/weatherSlice";
import { useDispatch } from "react-redux";

const CardNavbar = ({i}) => {
    const dispatch = useDispatch()

    const cardTab = (event) => {
        event.preventDefault();
        dispatch(setCardNavbar({index: i, selected: event.target.name}))
    }

    return (
        <nav className="grey">
            <div className="nav-wrapper">
                <ul id="nav" className="center">
                    <li><a href="today" name="today" onClick={cardTab}>Today</a></li>
                    <li><a href="hourly" name="hourly" onClick={cardTab}>Hourly</a></li>
                    <li><a href="3-day" name="3-day" onClick={cardTab}>3 Day</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default CardNavbar;