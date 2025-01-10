import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoHome, IoCartOutline, IoLogOutOutline } from "react-icons/io5";
import { AxiosInstance } from '../../Config/AxiosInstance';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { logout } from '../../Auth';

const Header = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await AxiosInstance.get('/category/get-categories');
        setCategories(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories()
  },[])

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  

  const handleCategoryClick = (categoryName) => {
    navigate(`/product/get-products/${categoryName}`);
  };

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <p className="text-danger">Error: {error}</p>;
  }

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#ffff64', position: 'fixed', width: '100%', zIndex: 1000, top: 0 }}>
      <Container fluid>
        <Navbar.Brand>
          <Link to={'/'} className="link-dark">
            <IoHome style={{ fontSize: '28px' }} />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {categories.map((category) => (
              <Nav.Link
                className="text-decoration-none link-dark mx-2"
                key={category._id}
                onClick={() => handleCategoryClick(category.name)}
                style={{ cursor: 'pointer' }} 
              >
                {category.name}
              </Nav.Link>
            ))}
          </Nav>

          <ul className="d-flex p-0 m-0 justify-content-end" style={{ listStyle: 'none', gap: '70px' }}>
            <div style={{ position: 'relative' }}>
              <li>
                <Link to={'cart'} className="text-decoration-none link-dark">
                  <IoCartOutline style={{ fontSize: '22px' }} /> Cart
                </Link>
              </li>
              <div style={{
                position: 'absolute',
                top: '-8px',
                right: '37px',
                padding: '2px 5px',
                borderRadius: '20px',
                backgroundColor: 'rgb(200, 0, 0)',
                fontSize: '10px',
                color: 'white',
              }}>
                {cartItems.length}
              </div>
            </div>

            <li onClick={handleLogout}>
              <IoLogOutOutline style={{ fontSize: '20px' }} className="text-decoration-none link-dark" /> Logout
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

