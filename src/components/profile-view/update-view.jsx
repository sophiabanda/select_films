import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export const UpdateView = ({ loggedInUser }) => {
  console.log(loggedInUser);
  const [username, setUsername] = useState(loggedInUser.Name);
  const [password, setPassword] = useState(loggedInUser.Password);
  const [email, setEmail] = useState(loggedInUser.Email);
  const [birthday, setBirthday] = useState(loggedInUser.Birthday);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      Name: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch("https://sophia-films.herokuapp.com/user/id/:userId", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("Update successful!");
      } else {
        alert("Update failed.");
      }
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

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
          <Form className="form-label" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Birthday:</Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              ></Form.Control>
              <Form.Text className="form-label">
                (Birthdate is optional)
              </Form.Text>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
          <Button variant="primary">Submit changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
