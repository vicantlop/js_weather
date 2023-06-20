import { useDispatch } from 'react-redux';
import { setCoordinates } from '../reducers/autocompleteSlice';

const AutocompleteList = ({ city, region, country, lat, lon }) => {
    const dispatch = useDispatch();

    const coordinates = `${lat},${lon}`
    const fullName = `${city}, ${region}, ${country}`

    const autocompleteClick = (event) => {
        dispatch(setCoordinates(event.target.id))
        document.getElementById("city").value = event.target.classList.value
        document.getElementById("citySubmit").disabled = false;
    }


    return (
        <div>
            <li id={coordinates} onClick={autocompleteClick} className={fullName}>{fullName}</li>
            <li className="divider" tabIndex="-1"></li>
        </div>
    )
}

export default AutocompleteList