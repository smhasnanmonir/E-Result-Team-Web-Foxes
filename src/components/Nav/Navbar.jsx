import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../assets/allimage/logo.jpg'
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link to="/"><img className="w-20 h-20 mb-2 rounded-2xl" src={logo} alt="" /></Link>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar