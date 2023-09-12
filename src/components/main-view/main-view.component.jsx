import { Container, Row, Col, Modal, ModalTitle } from 'react-bootstrap';
import NavBar from '../nav-component/nav.component';
import { useEffect, useState } from 'react';
import ShopItem from '../shop-item-card/shop-item.component';
import '../../index.css';

const MainView = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <>
        <NavBar showModal={showModal} />
      </>
      <Container className='products-container'>
        <Row>
          {products ? (
            products.map((product) => (
              <Col md={3} className='mb-5' id='col-wrapper' key={product.id}>
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
