import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const FilmCard = ({ film }) => {
  return (
    <Card className="h-100">
      <Card.Img src={film.image}></Card.Img>
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        {/* <Card.Text>{film.summary}</Card.Text> */}
        <Link to={`/films/${encodeURI(film.id)}`}>
          <Button>More detail</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

//onClick event listener cannot
//be used in components, only in regular divs.
