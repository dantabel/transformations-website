import './App.scss'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'

const App = ({hasError = false}) => {
  
  return (
    <>
      <div id="App" className='App'>
        <header className='bg-primary'> 
          <Navbar expand="lg" className="bg-body-primary border-bottom" variant='dark'>
            <Container>
              <Navbar.Brand href='/' className=''><img src={`${import.meta.env.BASE_URL}logo.png`} className='me-2' /> Transformations</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to={`/about`}>About us</Nav.Link>
                  <Nav.Link as={NavLink} to={`/about/team`}>Our team</Nav.Link>
                  <Nav.Link as={NavLink} to={`/coaching`}>Coaching</Nav.Link>
                  {/* <NavDropdown title="About us" id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/about">About us</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/about/our-team">
                      Our team
                    </NavDropdown.Item>
                    
                  </NavDropdown> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <main className='bg-light py-3'>
          {
            hasError ? 
              <ErrorPage />
            : 
              <Outlet />
          }
        </main>

        <footer className='border-top bg-primary text-white'>
          <div className='container py-3 text-center'>
            <p className='m-0 text-light opacity-50'><small>&copy; 2024 Transformations International Ltd.</small></p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
