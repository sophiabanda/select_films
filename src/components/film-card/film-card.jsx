import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { React, useState } from "react";

//     //logic:
//     //if filmCard favorite button is clicked
//     //add to loggedInUser favorites

export const FilmCard = ({ film }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link to={`/films/${encodeURI(film.id)}`}>
      <Card className="h-100">
        <Card.Img src={film.image}></Card.Img>
        <Card.Body>
          <Card.Title>{film.title}</Card.Title>
          {/* <Card.Text>{film.summary}</Card.Text> */}
        </Card.Body>
        <Button>Favorite</Button>
      </Card>
    </Link>
  );
};

//onClick event listener cannot
//be used in components, only in regular divs.

//checkbox, radio button
