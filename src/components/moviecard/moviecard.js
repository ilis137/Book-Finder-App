import React from "react";
import { Col, Card, Button } from "react-materialize";

import styles from "./moviecard.module.css";
const moviecard = props => {
  const Movies = props.resultMovies.map((movie, index) => {
    return (
      <Col s={12} m={12} l={6} className={styles.card_container} key={index}>
        <Card className={styles.card} horizontal>
          <div className={styles.movie_info}>
            <div className={styles.image_container}>
              {movie.volumeInfo.imageLinks ? (
                <img
                  className={styles.image}
                  src={movie.volumeInfo.imageLinks.thumbnail}
                  alt="book_image"
                />
              ) : (
                "N/A"
              )}
            </div>

            <div className={styles.content}>
              <h3 className={styles.title}>{movie.volumeInfo.title}</h3>
              <p>
                By:
                {movie.volumeInfo.authors
                  ? movie.volumeInfo.authors.join(",")
                  : "N/A"}
              </p>
              <p>
                Published by:
                {movie.volumeInfo.publisher
                  ? movie.volumeInfo.publisher
                  : "N/A"}
              </p>
            </div>
          </div>
          <Button
            className={styles.btn}
            node="a"
            href={movie.volumeInfo.infoLink}>
            SEE MORE
          </Button>
        </Card>
      </Col>
    );
  });

  return Movies;
};

export default moviecard;
