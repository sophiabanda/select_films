import { useState } from "react";
import { Form, Button, Modal, Col, Row } from "react-bootstrap";
import { DeleteUser } from "./delete-user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UpdateView = ({
  loggedInUser,
  handleUpdateUser,
  storedToken,
  onLoggedOut,
}) => {
  const birthdayValue = new Date(loggedInUser.Birthday)
    .toISOString()
    .split("T")[0];
  const [username, setUsername] = useState(loggedInUser.Name);
  const [email, setEmail] = useState(loggedInUser.Email);
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState(birthdayValue);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      Name: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch(`https://sophia-films.herokuapp.com/user/id/${loggedInUser._id}`, {
      method: "PUT",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedToken}`,
      },
    })
      .then((response) => response.json())
      .then((user) => handleUpdateUser(user))
      .then(toast.success(`${loggedInUser.Name} updated successfully!`))
      .then(handleClose)
      .then(navigate("/profile"));
  };

  return (
    <Row className="justify-content-md-center">
      <Col>
        <Button variant="primary" onClick={handleShow}>
          Update user information
        </Button>
      </Col>
      <Col>
        <DeleteUser
          onLoggedOut={onLoggedOut}
          loggedInUser={loggedInUser}
          storedToken={storedToken}
        />
      </Col>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label className="modal-label">Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter current password to make and save changes"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label className="modal-label">Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label className="modal-label">Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label className="modal-label">Birthday:</Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            Submit changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};
