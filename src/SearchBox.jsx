import Button from "@mui/material/Button";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function SearchBox() {
  
  let [city,setCity] = useState('');



  let handleSubmit = (e) => {
    e.preventDefault();
     setCity('');
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
