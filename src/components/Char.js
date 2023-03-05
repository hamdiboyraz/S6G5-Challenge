import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material/";
import PropTypes from "prop-types";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const Char = ({ char, key }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(panel, isExpanded);

    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <Accordion
        // expanded={expanded === key} // it returns boolean
        expanded={expanded === key} // it returns boolean
        onChange={handleChange(key)}
      >
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {char.name}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {char.birth_year}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ width: "100%" }}>
            <Box
              sx={{
                display: "grid",
                gap: 1,
                gridTemplateColumns: "repeat(2, 1fr)",
              }}
            >
              <Item>Gender: {char.gender}</Item>
              <Item>Eye Color: {char.eye_color}</Item>
              <Item>Height: {char.height}</Item>
              <Item>Hair Color: {char.hair_color}</Item>
              <Item>Mass:{char.mass}</Item>
              <Item>Skin Color:{char.skin_color}</Item>
            </Box>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Char;

{
  /* <Accordion
expanded={expanded === "panel1"}
onChange={handleChange("panel1")}
>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
>
  <Typography sx={{ width: "33%", flexShrink: 0 }}>
    General settings
  </Typography>
  <Typography sx={{ color: "text.secondary", textAlign: "right" }}>
    I am an accordion
  </Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
    Aliquam eget maximus est, id dignissim quam.
  </Typography>
</AccordionDetails>
</Accordion>
<Accordion
expanded={expanded === "panel2"}
onChange={handleChange("panel2")}
>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel2bh-content"
  id="panel2bh-header"
>
  <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
  <Typography sx={{ color: "text.secondary" }}>
    You are currently not an owner
  </Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
    Donec placerat, lectus sed mattis semper, neque lectus feugiat
    lectus, varius pulvinar diam eros in elit. Pellentesque convallis
    laoreet laoreet.
  </Typography>
</AccordionDetails>
</Accordion> */
}
