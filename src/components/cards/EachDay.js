const EachDay = ({day, high, low, humidity, sunrise, sunset, moonrise, moonset, rainChance, uv, icon, condition}) => {
    return(
        <div>
            <div>
                {day}
            </div>
            <div>
                <img src={icon} alt="condition icon"/> {condition}
            </div>
            <div>
                high: {high}°, low: {low}°
            </div>
            <div>
                sunrise: {sunrise}, sunset: {sunset}
            </div>
            <div>
                moonrise: {moonrise}, moonset: {moonset}
            </div>
            <div>
                humidity: {humidity}, uv: {uv}, chance of rain: {rainChance}
            </div>
            <br/>
        </div>
    )
}

export default EachDay