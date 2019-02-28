import React, { useState, useEffect } from "react";
import { Row } from "react-materialize";
import axios from "axios";

import Layout from "./components/Layout/Layout";
import Search from "./components/search/Search";
import MovieCard from "./components/moviecard/moviecard";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import APIKey from "./config";
import styles from "./App.module.css";
const App = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noQueryError, setNoQueryError] = useState("");
  const [error, setError] = useState("");
  const [searchBarFocus, setSearchBarFocus] = useState(false);
  const [Input, setInput] = useState("");
  const inputChangeHandler = event => {
    setSearchTerm(event.target.value);
  };

  const searchBook = () => {
    if (!searchTerm) {
      return setNoQueryError("First please enter a query!");
    }
    setNoQueryError("");
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=30&key=${APIKey}`,
        { timeout: 2000 }
      )
      .then(data => {
        let obj = JSON.parse(localStorage.getItem("searchHistory"));
        console.log(obj);

        if (!obj) {
          obj = {};
          obj.searchHistory = [];
        }
        if (obj.searchHistory.length == 10) obj.searchHistory.shift();
        obj.searchHistory = obj.searchHistory.concat(searchTerm);

        localStorage.setItem("searchHistory", JSON.stringify(obj));
        setError("");
        if (data.data.totalItems == 0) {
          setLoading(false);
          return setError("NO RESULTS FOUND");
        }
        const movies = data.data.items;
        setMovies(movies);
        setLoading(false);
      })
      .catch(err => {
        if (err.message == "timeout of 2000ms exceeded")
          setError("timeout reached");
        else setError(err.message);
        setMovies([]);
        setLoading(false);
      });
  };

  const keyPressHandler = event => {
    if (event.which == 13) {
      document.activeElement.blur();
      searchBook();
    }
  };

  const searchBarFocusHandler = event => {
    setSearchBarFocus(!searchBarFocus);
  };

  return (
    <div>
      <Layout>
        <Row>
          <h3
            className={styles.App}
            style={loading || movies.length ? null : { marginTop: "200px" }}>
            Book Finder
          </h3>
        </Row>
        <Row>
          <Search
            onInput={inputChangeHandler}
            makeSearch={searchBook}
            handlekeyPress={keyPressHandler}
            noQueryError={noQueryError}
            searchBarFocus={searchBarFocus}
            handleFocus={searchBarFocusHandler}
            searchItems={
              JSON.parse(localStorage.getItem("searchHistory"))
                ? JSON.parse(localStorage.getItem("searchHistory"))
                    .searchHistory
                : null
            }
          />
        </Row>
        <Row className={styles.flex_row}>
          {loading ? (
            <Loader />
          ) : error ? (
            <Error error={error} />
          ) : (
            <MovieCard resultMovies={movies} />
          )}
        </Row>
      </Layout>
    </div>
  );
};

export default App;
