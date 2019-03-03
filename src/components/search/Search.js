import React from "react";
import {
  Col,
  Input,
  Button,
  Row,
  Collection,
  CollectionItem
} from "react-materialize";

import styles from "./Search.module.css";
const Search = props => {
  return (
    <div onKeyPress={props.handlekeyPress}>
      <Col s={12} l={6} className={styles.search}>
        <Col s={12} m={9} className={styles.searchBoxContainer}>
          <Input
            s={12}
            inline
            className={styles.input}
            onChange={props.onInput}
            onFocus={props.handleFocus}
            onBlur={props.handleFocus}
            data-testid="search-textbox"
          />
          {props.searchBarFocus ? (
            <ul className={styles.searchSuggestions}>
              {props.searchItems.map((_, i, searchItems) => {
                return (
                  <li
                    className={styles.searchSuggestionsItem}
                    onClick={props.handleSelectOption}
                    value={searchItems[searchItems.length - i - 1]}>
                    {searchItems[searchItems.length - i - 1]}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </Col>
        <Button waves="light" className={styles.btn} onClick={props.makeSearch}>
          Search
        </Button>
        <Row>
          <Col s={12}>
            {props.noQueryError ? (
              <p className={styles.emptyQuery} data-testid="noqueryerror">
                {props.noQueryError}
              </p>
            ) : null}
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Search;
