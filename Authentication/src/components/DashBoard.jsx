import { useState } from "react";
import { useAuth } from "./context/AuthProvider";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [error, setError] = useState("");
  /**
   * 1 check if user is logged in by context
   * 2 if not logged in redirect the user to login
   */
  const { logout, setCurrentUser, currentUser } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      await logout();
      setCurrentUser({});
      localStorage.setItem("authUser", "");

      navigate("/login");
    } catch (error) {
      console.error(error);
      setError("Failed to log out");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={onLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
};

export default DashBoard;
