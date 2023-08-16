import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//     //logic:
//     //if filmCard favorite button is clicked
//     //add to loggedInUser favorites

export const FilmCard = ({ film, user }) => {
  console.log(film, user, user.Favorites);

  return (
    <Card className="h-100">
      <Card.Img src={film.image}></Card.Img>
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        {/* <Card.Text>{film.summary}</Card.Text> */}
        <Link to={`/films/${encodeURI(film.id)}`}>
          <Button>More detail</Button>
        </Link>
        <Button>Favorite</Button>
      </Card.Body>
    </Card>
  );
};

//onClick event listener cannot
//be used in components, only in regular divs.

//checkbox, radio button
