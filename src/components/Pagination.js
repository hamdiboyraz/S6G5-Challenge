import React from "react";
import { Pagination as Pg } from "@mui/material/";

const Pagination = ({ count, setPage, setLoading }) => {
  return (
    <>
      <Pg
        count={count}
        color="primary"
        style={{
          marginTop: "1rem",
          background: "linear-gradient(45deg, #53c0ff 30%, #fe6bb7 90%)",
          display: "flex",
          justifyContent: "center",
        }}
        onChange={(e) => {
          setPage(e.target.textContent);
          setLoading(true);
        }}
      />
    </>
  );
};

export default Pagination;
