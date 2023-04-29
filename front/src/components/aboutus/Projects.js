import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../../images/aboutus/project-img1.png';
import projImg2 from '../../images/aboutus/project-img2.png';
import projImg3 from '../../images/aboutus/project-img3.png';
import projImg4 from '../../images/aboutus/project-img4.png';
import projImg5 from '../../images/aboutus/project-img5.png';
import projImg6 from '../../images/aboutus/project-img6.png';
// import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import classes from './AboutUs.module.css';

export const Projects = () => {
  const projects = [
    {
      title: '김지수',
      description: 'Team Leader / FullStack Developer \n Deployment',
      imgUrl: projImg1,
    },
    {
      title: '권예슬',
      description: 'BE Leader / FullStack Developer \n Core',
      imgUrl: projImg2,
    },
    {
      title: '전지수',
      description: 'FullStack Developer \n Core',
      imgUrl: projImg3,
    },
    {
      title: '이성재',
      description: 'FE Leader / FrontEnd Developer',
      imgUrl: projImg4,
    },
    {
      title: '✨PetSure 마스코트✨',
      description: '🐱냥이와 멍이🐶',
      imgUrl: projImg6,
    },
    {
      title: '김채윤',
      description: 'FrontEnd Developer',
      imgUrl: projImg5,
    },
  ];

  return (
    <section className={classes.project} id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  {/* <span className={classes.tagline}>About us</span> */}
                  <br />
                  <br />
                  <h2 className={classes.font_black}>💡 Project Team Member 💡</h2>
                  <br />
                  <h3 className={classes.font_black}> [오목조목] 팀원들을 소개합니다 </h3>
                  <p>오목조목 : 자그마한 것이 모여서 야무진 느낌을 주는 모양</p>
                  <br />
                  <hr />
                  <br />

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className={classes.nav_pills} id="pills-tab" />
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? 'animate__animated animate__slideInUp' : ''}
                    >
                      <Tab.Pane className={classes.zindex_max} eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} /> */}
    </section>
  );
};
