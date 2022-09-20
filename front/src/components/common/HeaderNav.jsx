import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderNav() {
  return (
    <Navbar bg="white" variant="white">
      <Container fluid>
        <Navbar.Brand href="/landing">
          <img
            src="petsureLogo.png"
            width="32"
            height="32"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="펫 보험">
            <NavDropdown.Item href="/basicinput/">기본검색</NavDropdown.Item>
            <NavDropdown.Item href="/allinput/">상세검색</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/diseasdict">질병상식</Nav.Link>
          <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#">가이드</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;

// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

// import MenuBtn from './MenuBtn';
// import classes from './HeaderNav.module.css';
// import Button from './Button';

// import DropdownMenu from './DropdownMenu';

// function HeaderNav() {
//   const state = useSelector(state => state.user);
//   // const state = {
//   //   id: 'test',
//   // }
//   const [showMenu, setShowMenu] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const globalClickHandler = ({ target }) => {
//     if (!target.classList.contains('click-blocked')) setShowMenu(!showMenu);
//   };
//   const handleClick = () => setShowMenu(!showMenu);

//   return (
//     <nav className={`${classes.headerNav} ${state.id ? classes.auth : ''}`}>
//       <div className={classes.navWrapper}>
//         <div className={classes.HeaderNav_link_btns}>
//           {state.id && (
//             <div className={`${classes.HeaderNav_link_btns} ${classes.hover_color}`}>
//               <MenuBtn text="홈" link="/meeting" />

//               <MenuBtn
//                 className={classes.HeaderNav_link_focus}
//                 text="랜덤매칭"
//                 link="/meeting?rematching=true"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default HeaderNav;
