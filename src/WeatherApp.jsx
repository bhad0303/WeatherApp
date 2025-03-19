import SearchBox from './SearchBox';
import InfoBox from  './InfoBox';
import { useState } from 'react';

function WeatherApp(){
          
    let [weatherInfo,setWeatherInfo] = useState({
        city: "ahmedabad",
        humidity: "300",
        pressure: "1009",
        temp_max: "35.2",
        temp_min: "30.2",
        feels_like: "good",
        description: "haze",
    });
   

    const updateInfo = (info)=>{
            
        setWeatherInfo(info);
    }



       return (
          <div>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
          </div>
       )
}


export default WeatherApp;