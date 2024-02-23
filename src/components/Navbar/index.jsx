import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import MeflexLogo from "../../Images/Meflex Logo.png";
import navsearchboxicon from "../../Images/navsearchboxicon.png";

const Navigationbar = () => {
  return (
    <Navbar expand="md">
      <Container className="container-navbar">
        <Navbar.Brand href="#home" className="nav-logo">
          <img src={MeflexLogo} alt="Meflex Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="custom-navbar-collapse" >
          <Nav className="nav-items w-100">
            <li>Explore</li>
            <li>Create</li>
            <li>Meflex TV</li>
            <li>Artist</li>
            <li className="d-md-none d-lg-none">Log In</li>
          </Nav>
          <Form className="d-flex search-box-nav d-none d-md-flex">
            <div className="search-container">
              <FormControl
                type="search"
                placeholder="Type for collections, NFTs etc"
                aria-label="Search"
              />
              <img
                src={navsearchboxicon}
                alt="search box icon"
                width={14}
                height={14}
              />
            </div>
          </Form>
          <button className="login-btn d-none d-md-flex">Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
