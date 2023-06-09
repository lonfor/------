import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import DogBreedsList from "../DogBreedsList/DogBreedsList";
import { Grid, Container } from "@mui/material";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  const handleSearch = async (breed, parameters) => {
    try {
      let breedUrl = breed
        ? `https://dog.ceo/api/breed/${breed}/images/random/30`
        : "https://dog.ceo/api/breeds/image/random/30";
      const response = await fetch(breedUrl);
      const data = await response.json();
      setSearchResults(data.message);
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <Container>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 3, sm: 3, md: 3 }}
        className="App"
      >
        <Grid
          item
          xs={12}
          sx={{
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <h1>Dog Breeds Search</h1>
          <SearchForm
            onSearch={handleSearch}
            onBreedSelect={handleBreedSelect}
          />
        </Grid>
      </Grid>
      <Container
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <DogBreedsList breeds={searchResults} breedName={selectedBreed} />
      </Container>
    </Container>
  );
}

export default App;
