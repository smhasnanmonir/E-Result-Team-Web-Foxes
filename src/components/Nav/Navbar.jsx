import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav className='my-text'>
        <Link to="/"><img className="h-[40px] lg:h-[55px]" src="https://i.ibb.co/JCrjBVW/e-result.png" alt="" /></Link>
        <Burger />
    </Nav>
  )
}

export default Navbar