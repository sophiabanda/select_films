import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const DeleteUser = ({ loggedInUser, storedToken, onLoggedOut }) => {
  console.log(loggedInUser);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    fetch(`https://sophia-films.herokuapp.com/users/id/${loggedInUser._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("User deleted successfully");
          handleClose();
          onLoggedOut(); // Call the logout function after successful deletion
        } else {
          throw new Error("Failed to delete user.");
        }
      })
      .catch((error) => {
        console.log("Error deleting user.", error);
      });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Delete user account
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Select Films Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Are you sure you want to delete your account, ${loggedInUser.Name}? You will be immediately logged out and would need to sign up again to access Select Films. Please confirm your choice below:`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
          <Button onClick={handleDelete} variant="primary">
            Confirm Deletion
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
