import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Dropdown({ onBreedChange, value }) {
  const [searchResultsList, setSearchResultsList] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    fetchDogBreedsList();
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    onBreedChange(event);
  };
  const fetchDogBreedsList = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      console.log(data.message);
      setSearchResultsList(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Breeds</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedValue}
        label="Breed"
        onChange={handleChange}
      >
        <MenuItem key='undef' value=''>
         All Breeds
        </MenuItem>
        {Object.keys(searchResultsList).map((key, value) => (
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
