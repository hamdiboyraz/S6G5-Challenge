import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import Info from "./components/Info";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

import { Container } from "@mui/material"; // import Container from '@mui/material/Container';

const App = () => {
  const [chars, setChars] = useState(null);
  const [count, setCount] = useState(null);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const totalPage = Math.ceil(count / 10);

  const getData = () => {
    axios
      .get("https://swapi.dev/api/people/", {
        params: {
          page,
          search,
        },
      })
      .then((res) => {
        setChars(res.data.results);
        setCount(res.data.count);
        setLoading(false);

        console.log(res);
        console.log(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    // setTimeout(console.log("hi", chars), 2000);
  }, [search, page]);

  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm">
        <SearchBar setSearch={setSearch} />
        {loading ? <Loading /> : <Info count={count} />}
        <Characters chars={chars} />
        <Pagination
          count={totalPage}
          setPage={setPage}
          setLoading={setLoading}
        />
      </Container>
    </div>
  );
};

export default App;
