import { Col } from 'react-bootstrap';
import classes from './AboutUs.module.css';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className={classes.proj_imgbx}>
        <img className={classes.img_width_100} src={imgUrl} />
        <div className={classes.proj_txtx}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
