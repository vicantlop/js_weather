const EachHour = ({ time, temp, icon, rainChance }) => {
    return (
        <li>
            <div>
                {time}
            </div>
            <div>
                {temp}
            </div>
            <div>
                <img src={icon} alt="condition icon" />
            </div>
            <div>
                {rainChance}%
            </div>
            <br />
        </li>
    )
}

export default EachHour;