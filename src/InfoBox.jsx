import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './InfoBox.css'

function InfoBox({info}) {
  let img_url =
    "https://images.unsplash.com/photo-1529419412599-7bb870e11810?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // let info = {
  //   city: "ahmedabad",
  //   humidity: "300",
  //   pressure: "1009",
  //   temp_max: "35.2",
  //   temp_min: "30.2",
  //   feels_like: "good",
  //   description: "haze",
  // };

  return (
    <div className="InfoBox">
      <h2>Weather info </h2>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 200, width: 400 }}
          image={img_url}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
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
