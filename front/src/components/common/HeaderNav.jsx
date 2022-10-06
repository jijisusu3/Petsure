import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import classes from './HeaderNav.module.css';
import { width } from '@mui/system';

function HeaderNav() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Navbar
      className="p-1 shadow-sm"
      bg="white"
      variant="white"
      style={{ position: 'sticky' }}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="/" className="ms-3">
          <img
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            width="144"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Nav className="me-auto p-2 fw-bold fs-6">
          <NavDropdown className="me-3 ms-5" title="펫 보험">
            <NavDropdown.Item href="/basicinput">기본검색</NavDropdown.Item>
            <NavDropdown.Item href="/allinput">상세검색</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/diseasdict" className="me-3 ms-5">
            질병노트
          </Nav.Link>
          <Nav.Link href="/aboutus" className="me-3 ms-5 ">
            ABOUT US
          </Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="me-5">
            <Button className="text-dark fw-bold fs-6" variant="link" onClick={() => setShow(true)}>
              가이드
            </Button>
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
              size="lg"
            >
              {/* <Modal.Header style={{ height: '50px', backgroundColor: '#F8F7F6' }} closeButton>
                <Modal.Title id="example-Guide-modal-styling-title"> {'  '} GUIDE</Modal.Title>
              </Modal.Header> */}
              <Modal.Body
                style={{
                  background: '#F8F7F6',
                  borderRadius: '20px',
                  width: '800px',
                  // height: '800px',
                }}
              >
                <div
                  style={{
                    textAlign: 'center',
                    fontSize: '14px',
                    marginBottom: '5px',
                    padding: '30px',
                  }}
                  className={classes.guideinfo}
                >
                  보험 가입 시, 궁금할 만한 것들을 모아두었어요!
                  <br />
                  필요할 때 마다 참고해주세요 📖
                </div>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                  style={{ padding: 15, borderRadius: 20, marginTop: '10px' }}
                  background-color="#DEDDDC"
                >
                  <Accordion
                    style={{ width: 600, borderRadius: '20px', padding: '5px', boxShadow: 'none' }}
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <p style={{ width: '7%', flexShrink: 0, margin: '3px' }}>🍼</p>
                      <p className={classes.qtitle}>
                        아주 어린 반려견을 키우고 있어요. 언제부터 가입이 가능할까요?
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className={classes.firstcnt}>
                        <span style={{ marginRight: '23px' }}>🐶</span>통상적으로 펫보험을 가입할 수
                        있는 최소 기준은 생후 60일 부터에요.
                      </p>
                      <p className={classes.qcontent}>
                        <p>예외적으로 90일부터 가입 가능한 보험들이 있으니 확인해주세요.</p>
                        <p>예방접종은 보장되지 않는 보험이 많으니 참고하세요!</p>
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    style={{ width: 600, borderRadius: '20px', padding: '5px', boxShadow: 'none' }}
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                    sx={{
                      '&:before': {
                        display: 'none',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <p style={{ width: '7%', flexShrink: 0, margin: '3px' }}>🐛</p>
                      <p className={classes.qtitle}>
                        배탈, 골절 등 흔한 질환도 모두 보장 받을 수 있나요?
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className={classes.firstcnt}>
                        <span style={{ marginRight: '23px' }}>🐱</span>현재 판매되는 펫보험 대부분은
                        통원치료비 보상형으로,
                      </p>
                      <p className={classes.qcontent}>
                        <p>특별히 제외하고 있는 질병이 아니라면 보장을 받을 수 있어요!</p>
                        <p>
                          실제, 구토 / 설사 / 혈변 / 위염 / 골절 등이 펫보험 TOP 지급 사유입니다.
                        </p>
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    style={{ width: 600, borderRadius: '20px', padding: '5px', boxShadow: 'none' }}
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                    sx={{
                      '&:before': {
                        display: 'none',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <p style={{ width: '7%', flexShrink: 0, margin: '3px' }}>📟</p>
                      <p className={classes.qtitle}>
                        동물병원 비용이 적게나와요. 어떤 보험이 적합할까요?
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className={classes.firstcnt}>
                        <span style={{ marginRight: '23px' }}>🐶</span>자기부담금이 적은 보험을
                        가입하는게 좋겠어요.
                      </p>
                      <p>
                        <p className={classes.qcontent}>
                          진료비가 적게 나올 경우, 자기부담금을 공제했을 때 보장받을 수 있는 비용이
                          없거나 적을 수 있어요.{' '}
                          <p style={{ marginTop: '20px' }}>
                            <span
                              style={{
                                // color: '#FF8000',
                                marginRight: '5px',
                                textDecoration: 'underline',
                              }}
                            >
                              통원보장금액이 궁금하다면?
                            </span>
                            펫슈어의
                            <span
                              style={{
                                boxShadow: 'inset 0 -15px 0 rgba(250, 211, 177, 0.855)',
                                lineHeight: '21px',
                                marginLeft: '3px',
                              }}
                            >
                              보장금액 계산기능
                            </span>
                            을 이용해보세요.
                          </p>
                        </p>
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    style={{ width: 600, borderRadius: '20px', padding: '5px', boxShadow: 'none' }}
                    expanded={expanded === 'panel4'}
                    onChange={handleChange('panel4')}
                    sx={{
                      '&:before': {
                        display: 'none',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      <p style={{ width: '7%', flexShrink: 0, margin: '3px' }}>✌</p>
                      <p className={classes.qtitle}>
                        맹견 배상책임에 가입했는데, 또 배상책임에 가입할 수 있나요?
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className={classes.firstcnt}>
                        <span style={{ marginRight: '23px' }}>🐱</span>맹견의 경우 배상책임 특약을
                        가입할 수 없는 보험이 있으니 참고하세요.
                      </p>
                      <p className={classes.qcontent}>
                        <p>의무보험에서 보장받은 것 외의 손해를 보장받을 수 있습니다!</p>
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    style={{ width: 600, borderRadius: '20px', padding: '5px', boxShadow: 'none' }}
                    expanded={expanded === 'panel5'}
                    onChange={handleChange('panel5')}
                    sx={{
                      '&:before': {
                        display: 'none',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5bh-content"
                      id="panel5bh-header"
                    >
                      <p style={{ width: '7%', flexShrink: 0, margin: '3px' }}>💰</p>
                      <p className={classes.qtitle}>보험금 청구는 언제까지 할 수 있나요?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className={classes.firstcnt}>
                        <span style={{ marginRight: '23px' }}>🐶</span>보험금 청구권은 3년입니다.
                      </p>
                      <p className={classes.qcontent}>
                        <p>보험금을 청구할 사유가 발생한 시점으로부터</p>
                        <p>3년 이내에 청구해야 보장금액을 받을 수 있어요.</p>
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    style={{ width: 600, borderRadius: '20px', padding: '5px', boxShadow: 'none' }}
                    expanded={expanded === 'panel6'}
                    onChange={handleChange('panel6')}
                    sx={{
                      '&:before': {
                        display: 'none',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel6bh-content"
                      id="panel6bh-header"
                    >
                      <p style={{ width: '7%', flexShrink: 0, margin: '3px' }}>🧶</p>
                      <p className={classes.qtitle}>
                        반려동물의 나이가 많아요. 어떤 보험을 들어야 할까요?
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className={classes.firstcnt}>
                        <span style={{ marginRight: '23px' }}>🐱</span>최근 만 10세까지 신규 가입이
                        가능한 보험이 생겼어요.
                      </p>
                      <p className={classes.qcontent}>
                        <p>
                          추가로, 갱신을 통해 만 20세까지 보험에 가입할 수 있는 보험인지
                          확인해보세요.
                        </p>
                        <p>
                          만약 노견이 되었을 때 높아질 보험료가 부담된다면, 펫 적금을 알아보세요.
                        </p>
                        <p>
                          펫 적금의 경우 병원비로 인해 적금을 해지해도 중도해지이율이 적용되지
                          않아요.
                        </p>
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    style={{ width: 600, borderRadius: '20px', padding: '5px', boxShadow: 'none' }}
                    expanded={expanded === 'panel7'}
                    onChange={handleChange('panel7')}
                    sx={{
                      '&:before': {
                        display: 'none',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel7bh-content"
                      id="panel7bh-header"
                    >
                      <p style={{ width: '7%', flexShrink: 0, margin: '3px' }}>💊</p>
                      <p className={classes.qtitle}>
                        보험을 가입했어요. 보혐의 효력은 언제부터 개시되나요?
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className={classes.firstcnt}>
                        <span style={{ marginRight: '23px' }}>🐶</span>보험 계약을 하고, 보험료를
                        결제한 다음날 00:01 부터 보험이 개시됩니다.
                      </p>
                      <p className={classes.qcontent}>
                        <p>
                          보험 계약의 상태가 ‘가입진행’ 또는 ‘승인대기’라고 할 지라도, 보험개시와는
                          관계 없어요!
                        </p>
                        <p />
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    style={{ width: 600, borderRadius: '20px', padding: '5px', boxShadow: 'none' }}
                    expanded={expanded === 'panel8'}
                    onChange={handleChange('panel8')}
                    sx={{
                      '&:before': {
                        display: 'none',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel8bh-content"
                      id="panel8bh-header"
                    >
                      <p style={{ width: '7%', flexShrink: 0, margin: '3px' }}>🥱</p>
                      <p className={classes.qtitle}>
                        맹견을 키우고 있습니다. 맹견배상책임보험을 꼭 가입해야할까요?
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className={classes.firstcnt}>
                        <span style={{ marginRight: '23px' }}>🐱</span>법에서 규정하고 있는
                        맹견(도사견과 아메리칸 핏불테리어, 아메리칸 스태퍼드셔 테리어,
                      </p>
                      <p className={classes.qcontent}>
                        <p>스태퍼드 셔 불테리어, 로트와일러)은 맹견배상책임보험이 의무에요!</p>
                        <p>
                          의무를 이행하지 않을 시, 반려인에게 300만원 이하의 과태료가 부과될 수
                          있으니 참고하세요.
                        </p>
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    style={{
                      width: 600,
                      borderRadius: '20px',
                      padding: '5px',
                      boxShadow: 'none',
                      marginBottom: '30px',
                    }}
                    expanded={expanded === 'panel9'}
                    onChange={handleChange('panel9')}
                    sx={{
                      '&:before': {
                        display: 'none',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel9bh-content"
                      id="panel9bh-header"
                    >
                      <p style={{ width: '7%', flexShrink: 0, margin: '3px' }}>🧬</p>
                      <p className={classes.qtitle}>반려동물의 유전병이 걱정됩니다.</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className={classes.firstcnt}>
                        <span style={{ marginRight: '23px' }}>🐶</span>유전병의 경우, 1회 치료를
                        보장해주는 보험이 있어요.
                      </p>
                      <p className={classes.qcontent}>
                        <p>상담 시 참고하셔서 보험을 선택하시길 추천드려요!</p>
                        <p>
                          슬개골 탈구의 경우, 유전질환일 가능성이 높지만 특약을 통해 보장받을 수
                          있습니다.
                        </p>
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
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
