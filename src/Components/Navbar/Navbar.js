import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoHome } from "react-icons/io5";
import { logout } from '../../Auth';

function NavScrollExample() {
  const { cartCount } = useSelector((store) => store.cart);
  const { loginData } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/'); 
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#ffff64', position: 'fixed', width: '100%', zIndex: 1000, top: 0 }}>
      <Container fluid>
        <Navbar.Brand>
          <Link to={'/home'} className='link-dark'>
            <IoHome style={{ fontSize: '28px' }} />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to={'electronics'} className='text-decoration-none link-dark mx-2'>
              Electronics
            </Nav.Link>
            <Nav.Link as={Link} to={'jewelery'} className='text-decoration-none link-dark mx-2'>
              Jewelery
            </Nav.Link>
            <Nav.Link as={Link} to={'mensclothing'} className='text-decoration-none link-dark mx-2'>
              Men's Clothing
            </Nav.Link>
            <Nav.Link as={Link} to={'womensclothing'} className='text-decoration-none link-dark mx-2'>
              Women's Clothing
            </Nav.Link>
          </Nav>

          <ul className='d-flex p-0 m-0 justify-content-end' style={{ listStyle: 'none', gap: '70px' }}>
            <li>
              <FaRegUserCircle style={{ fontSize: '18px' }} /> {loginData ? loginData.username : <span>Guest</span>}
            </li>

            <div style={{ position: 'relative' }}>
              <li>
                <Link to={'cart'} className='text-decoration-none link-dark'>
                  <IoCartOutline style={{ fontSize: '22px' }} /> Cart
                </Link>
              </li>
              <div style={{
                position: 'absolute',
                top: '-8px', right: '37px',
                padding: '2px 5px',
                borderRadius: '20px',
                backgroundColor: 'rgb(200, 0, 0)',
                fontSize: '10px', color: 'white'
              }}>{cartCount}</div>
            </div>

            <li onClick={handleLogout}>
              <IoLogOutOutline
              style={{ fontSize: '20px' }} 
              className='text-decoration-none link-dark' /> Logout
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;