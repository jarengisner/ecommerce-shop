import { Container, Row, Col, Modal, ModalTitle } from 'react-bootstrap';
import NavBar from '../nav-component/nav.component';
import { useEffect, useState } from 'react';
import ShopItem from '../shop-item-card/shop-item.component';

const MainView = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <>
        <NavBar showModal={showModal} />
      </>
      <Container>
        <Row>
          {products ? (
            products.map((product) => (
              <Col md={3} className='mb-5'>
                <ShopItem product={product} />
              </Col>
            ))
          ) : (
            <h1>Cannot find products</h1>
          )}
        </Row>
      </Container>
    </>
  );
};

export default MainView;
