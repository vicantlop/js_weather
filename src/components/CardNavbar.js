import { setCardNavbar } from "../reducers/cardSlice";
import { useDispatch } from "react-redux";

const CardNavbar = () => {
    const dispatch = useDispatch()

    const cardTab = (event) => {
        event.preventDefault();
        dispatch(setCardNavbar(event.target.name))
    }

    return (
        <nav className="grey">
            <div className="nav-wrapper">
                {/* <a href="/#" className="brand-logo">Weather.js</a> */}
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