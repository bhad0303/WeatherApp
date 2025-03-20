import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css'

function InfoBox({info}) {
 
     let COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     let HOT_URL = "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     let RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



  return (







    <div className="InfoBox">
      <h2>Weather info </h2>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 200, width: 400 }}
          image={info.humidity > 80 ? RAIN_URL : info.temp_max > 15 ? HOT_URL : COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
           <span>  {info.humidity > 80 ? <ThunderstormIcon /> : info.temp_max > 302 ? <WbSunnyIcon /> : <AcUnitIcon />}</span>
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" } }component={'span'}>
            <p>
              {" "} 
              max-temprature : <b>{info.temp_max}&deg;c</b>
            </p>
            <p>
              {" "}
              mun-temprature : <b>{info.temp_min}&deg;c</b>
            </p>
            <p>
              {" "}
              feels like : <b> {info.feels_like}</b>
            </p>
            <p>
              {" "}
              pressure : <b>{info.pressure}</b>
            </p>
            <p>
              {" "}
              humidity : <b>{info.humidity}</b>
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
