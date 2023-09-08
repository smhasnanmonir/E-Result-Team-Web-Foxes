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
    <Nav>
        <Link to="/"><img className="h-[40px] lg:h-[50px]" src="https://i.ibb.co/n80R2cQ/eresult.png" alt="" /></Link>
        <Burger />
    </Nav>
  )
}

export default Navbar