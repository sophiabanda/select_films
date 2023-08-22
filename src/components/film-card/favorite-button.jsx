import { ButtonGroup, ToggleButton } from "react-bootstrap";

export const FavoriteButton = () => {
  return (
    <>
      <ButtonGroup toggle>
        <ToggleButton
          type="checkbox"
          variant={isFavorite ? "danger" : "outline-danger"}
          checked={isFavorite}
          onChange={handleFavoriteToggle}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </ToggleButton>
      </ButtonGroup>
    </>
  );
};
