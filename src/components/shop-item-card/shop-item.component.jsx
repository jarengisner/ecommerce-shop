import { Button, Card, CardImg } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ShopItem = ({ product }) => {
  //Need to implement a link button first which will take us to the details page//
  return (
    <Card>
      <CardImg src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button>
          <FontAwesomeIcon
            icon={faCartPlus}
            style={{ color: 'white', fontSize: 20 }}
          />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShopItem;
