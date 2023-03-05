import React from "react";
import { Alert } from "@mui/material";

const Info = ({ count }) => {
  return (
    <>
      {count > 0 ? (
        // TODO: make this style component MUI
        // TODO: align alerts
        <Alert
          severity="info"
          sx={{ mt: "1rem", textAlign: "center" }}
          width="100%"
        >
          {count} Characters are found.
        </Alert>
      ) : (
        <Alert severity="error" sx={{ mt: "1rem" }} width="100%">
          Nothing found!
        </Alert>
      )}
    </>
  );
};

export default Info;
