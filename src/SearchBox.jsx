import Button from "@mui/material/Button";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function SearchBox({updateInfo}) {
  
  let [city,setCity] = useState('');

    
  let API_KEY = "d5746e031aa58b95120f799804d31631";
  let API_URL = "https://api.openweathermap.org/data/2.5/weather"

    let getWeatherInformation = async ()=>{
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
       let jsonResponse = await response.json();
       console.log(jsonResponse)
       let result = { 
        city : city,
         humidity : jsonResponse.main.humidity,
         pressure : jsonResponse.main.pressure,
         temp_max : jsonResponse.main.temp_max,
         temp_min : jsonResponse.main.temp_min,
         feels_like : jsonResponse.main.feels_like,
         description : jsonResponse.weather[0].description
       }

       return result;

     
    }
  let handleSubmit = async (e) => {
    e.preventDefault();
   let result = await getWeatherInformation();
     setCity('');

     updateInfo(result);
    
     
  };

 

  let handleChange = (e)=>{
     setCity(e.target.value);
  }

  return (
    <div className="SearchBox">
      <h1>Weather Widget
      </h1>
      <form onSubmit={handleSubmit}>
        
      <TextField label="City Name" color="secondary" focused value={city} onChange={handleChange} />
      <br /><br />
        <Button variant="contained" type="submit" color="warning">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
