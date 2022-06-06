import { useState } from "react";
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  return (
    <div>
      <ReactstrapNavbar color="dark" dark expand="md">
        <NavbarBrand className="brand" onClick={() => navigate("/todos")}>
          Todo App
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavLink className="navLink" to="/todos">
              Todos
            </NavLink>
            <NavLink className="navLink" to="/newtodo">
              Create-ToDo
            </NavLink>
            <NavLink className="navLink" to="/users">
              Users
            </NavLink>
            <NavLink className="navLink" to="/newuser">
              Create-User
            </NavLink>
          </Nav>
        </Collapse>
      </ReactstrapNavbar>
    </div>
  );
};

export default Navbar;
