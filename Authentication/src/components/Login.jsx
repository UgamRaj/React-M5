import { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { loginWithEmailAndPassword, loginWithGoogle, setCurrentUser } =
    useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //! Login with email and password
  const onLoginWithEamilandPassword = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const currtUser = await loginWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ); //! Route to dashboard.
      console.log(currtUser);
      setCurrentUser(currtUser);
      const userData = JSON.stringify({
        email: currtUser.user.email,
        token: currtUser.user.stsTokenManager.accessToken,
      });
      console.log(userData);
      // localStorage.setItem(
      //   "authUser",
      //   userData
      // );
      localStorage.setItem("authUser", userData);
      //   user.email
      // user.stsTokenManager.accessToken
      navigate("/dashboard");
    } catch (err) {
      setError("invalid email or password");
      console.error(err);
    }

    setLoading(false);
  };

  //! Login With Google
  const onLoginWithGoole = async () => {
    setError("");
    setLoading(true);
    try {
      const currtUser = await loginWithGoogle();
      setCurrentUser(currtUser);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={onLoginWithEamilandPassword}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account?
        <Link to="/signup">Sign Up</Link>
      </div>
      <Button onClick={onLoginWithGoole}>Login With Google</Button>
    </>
  );
};

export default Login;

// https://zoom.us/j/99517117547 (Passcode: 123456)
