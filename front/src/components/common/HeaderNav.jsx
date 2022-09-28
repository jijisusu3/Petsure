import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function HeaderNav() {
  const [show, setShow] = useState(false);
  return (
    <Navbar className="p-3" bg="white" variant="white" style={{ position: 'sticky' }} fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={`${process.env.PUBLIC_URL}/petsureLogo.png`}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Nav className="me-auto p-2">
          <NavDropdown title="펫 보험">
            <NavDropdown.Item href="/basicinput">기본검색</NavDropdown.Item>
            <NavDropdown.Item href="/allinput">상세검색</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/diseasdict">질병상식</Nav.Link>
          <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="link" onClick={() => setShow(true)}>
              가이드
            </Button>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Custom Modal Styling
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi
                  aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores
                  quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus
                  debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
                  Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                  deleniti rem!
                </p>
              </Modal.Body>
            </Modal>
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
