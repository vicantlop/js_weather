import 'materialize-css/dist/css/materialize.min.css';
import './materialize';
import Navbar from "./components/Navbar"
import Forecast from './components/Forecast';
import Signup from './components/Signup';


function App() {
  // const location = forecast["location"]
  // const current = forecast["current"]
  // const threeday = forecast["forecast"]['forecastday']


  // console.log(`It is currently ${current["temp_f"]} degrees fahrenheit and ${current["condition"]["text"]} in ${location["name"]}, ${location["country"]}`)

  // for days in forecast:
  //     count += 1
  //     if count > 6:
  //         count -= 7
  //     day = days["day"]
  //     console.log(`{calendar.day_name[count]} will have a high of {day["maxtemp_f"]}, and a low of {day["mintemp_f"]}, and will be {day["condition"]["text"]}`)

  // }

  return (
      <div className="App">
        {/* <Signup /> */}
        <Navbar />
        <Forecast />
      </div>
  );
}

export default App;
