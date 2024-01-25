import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/dashboard">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Logout</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
