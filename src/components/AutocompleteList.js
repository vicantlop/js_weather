const AutocompleteList = ({ city, region, country }) => {
    return (
        <div>
            <li>{city}, {region}, {country}</li>
            <li className="divider" tabIndex="-1"></li>
        </div>
    )
}

export default AutocompleteList