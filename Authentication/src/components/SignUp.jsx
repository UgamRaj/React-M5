import { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  // todo--> Import the signup function we defined in AuthContext.js
  const { signUp, setCurrentUser } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //! Onclick submit data
  const handleSumbit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords and confirm password do not match");
    }

    try {
      setError("");
      setLoading(true);
      const currtUser = await signUp(
        emailRef.current.value,
        passwordRef.current.value
      );

      console.log(currtUser);
      setCurrentUser(currtUser);
      // const userData = JSON.stringify({
      //   email: currtUser.user.email,
      //   token: currtUser.user.stsTokenManager.accessToken,
      // });
      // console.log(userData);
      // localStorage.setItem("authUser", userData);
      navigate("/dashboard");
    } catch (e) {
      setError("Failed to create an account");
      console.error(e);
    }
    setLoading(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSumbit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account?
        <Link to="/login">Log In</Link>
      </div>
    </>
  );
};
export default Signup;
