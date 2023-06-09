import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Button from "@mui/material/Button";

const SearchForm = ({ onSearch, onBreedSelect }) => {
  const [breed, setBreed] = useState("");

  const handleBreedChange = (e) => {
    setBreed(e.target.value);
    onBreedSelect(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(breed);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Dropdown value={breed} onBreedChange={handleBreedChange}></Dropdown>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default SearchForm;
