import { Button, Card, CardImg } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import '../../index.css';
import { useState } from 'react';

const ShopItem = ({ product }) => {
  //Need to implement a link button first which will take us to the details page//
  const [details, setDetails] = useState(false);

  const detailHandle = () => {
    if (details === true) {
      setDetails(false);
    } else {
      setDetails(true);
    }
  };
  return (
    <>
      {details ? (
        <Card>
          <CardImg src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.price}</Card.Text>
            <Button onClick={detailHandle}>Details</Button>
            <Button>
              <FontAwesomeIcon
                icon={faCartPlus}
                style={{ color: 'white', fontSize: 20 }}
              />
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <CardImg src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            {/* <Card.Text className='description hidden'>
              {product.description}
            </Card.Text> */}
            <Card.Text>{product.price}</Card.Text>
            <Button onClick={detailHandle}>Details</Button>
            <Button>
              <FontAwesomeIcon
                icon={faCartPlus}
                style={{ color: 'white', fontSize: 20 }}
              />
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default ShopItem;
