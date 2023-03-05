import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ setSearch }) => {
  const inputProps = {
    sx: {
      "& input": {
        textAlign: "center",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        fullWidth: "100%",
      },
    },
  };

  return (
    <>
      <TextField
        id="standard-basic"
        // label="Type Something"
        variant="standard"
        InputProps={inputProps}
        placeholder="Search a Character in StarWars..."
        style={{ width: "100%" }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
