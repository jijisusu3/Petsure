import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import classes from './DetailInsure.module.css';

function DetailInsure() {
  return (
    <Card border="primary" style={{ width: '1342px' }}>
      <Card.Body>
        <Card.Title>보험로고</Card.Title>
        <Card.Text>보험이름자리</Card.Text>
        <Badge className={classes.badge} bg="secondary">
          슬개골
        </Badge>
      </Card.Body>
    </Card>
  );
}

export default DetailInsure;
