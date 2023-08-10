import { Button, Card } from "react-bootstrap";
import "./film-card.scss";

export const FilmCard = ({ film, onFilmClick }) => {
  return (
    <Card className="h-100, card-background" onClick={() => onFilmClick(film)}>
      <Card.Img src={film.image}></Card.Img>
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        {/* <Card.Text>{film.summary}</Card.Text> */}
        <Button>More detail</Button>
      </Card.Body>
    </Card>
  );
};

//onClick event listener cannot
//be used in components, only in regular divs.
