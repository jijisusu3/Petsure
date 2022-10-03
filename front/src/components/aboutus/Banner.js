import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import headerImg from '../assets/img/header-img.svg';
// import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import classes from './AboutUs.module.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className={classes.banner} id="home">
      <Container>
        <Row className={classes.aligh_items_center}>
          <Col xs={12} md={12} xl={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h1 className={classes.text_white}>
                    {`Hi! We're PetSure`}{' '}
                    <span
                      className={classes.txt_rotate}
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer"]'
                    >
                      <span className={classes.wrap}>{text}</span>
                    </span>
                  </h1>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  {/* <button onClick={() => console.log('connect')}>SSAFY<ArrowRightCircle size={25} /></button> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          {/* <Col xs={12} md={5} xl={2}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <h2>여기에 이미지 들어갑니다</h2>
                  {/* <img src={headerImg} alt="Header Img"/> */}
          {/* </div>
            </TrackVisibility>
          </Col> } */}
        </Row>
      </Container>
    </section>
  );
};
