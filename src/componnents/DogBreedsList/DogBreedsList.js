import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const DogBreedsList = ({ breeds, breedName }) => {
  return (
    <>
      {breeds.map((breed) => (
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            margin: "10px",
            height: "360px",
            width: "31%",
          }}
          key={breed.id}
        >
          <CardActionArea>
            <CardMedia
              className="card"
              component="img"
              height="300px"
              width="300px"
              src={breed}
              alt=" "
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {breedName ? breedName.toUpperCase() : breed.split("/")[4]}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default DogBreedsList;
