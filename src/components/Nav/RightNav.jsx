import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 50vh;
    width: 300px;
    padding: 2.5rem;
    color:white;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (

    <>
      <div className='mt-5 z-10'>

        <Ul open={open}>
          <Link to="/" className='me-5 font-bold'>Home</Link>
          <Link to="/contact" className='me-5 font-bold'>Contact</Link>
          <Link to="/viewAll" className='me-5 font-bold'>View Roll</Link>
          <Link to="/login" className='me-5 font-bold'>Login</Link>
          <Link to="/dashboard" className='me-10 font-bold'>Dashboard</Link>
          
        </Ul>
      </div>



    </>

  )
}

export default RightNav