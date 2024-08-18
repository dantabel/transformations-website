import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

const Services = () => {
  return <div id="Services" className="Services container">
    {/* <h1><NavLink to='/services'>Services</NavLink></h1> */}
    <h1>Services</h1>

    <Nav variant="underline" justify={true} className="justify-content-start">
      <Nav.Item>
        <Nav.Link as={NavLink} to={`coaching`}>Coaching</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="coach-training">Coach Training</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="counselling">Counselling</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="consultancy">Consultancy</Nav.Link>
      </Nav.Item>
    </Nav>

    <div className="pt-3">
      <Outlet />
    </div>

  </div>
}

export default Services