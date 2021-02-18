import React, { useEffect, useState } from 'react';
import { Table, Container, Row } from 'reactstrap';
import apis from '../../apis';

const Home = () => {
  const [documents, setDocuments] = useState();

  useEffect(() => {
    apis.document.listDocuments().then((data) => {
      setDocuments(data);
    });
  }, []);

  return (
    <Container>
      <h1>Home</h1>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>KTP Number</th>
              <th>NPWP Number</th>
              <th>Passport Number</th>
            </tr>
          </thead>
          <tbody>
            {documents &&
              documents.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.address}</td>
                  <td>{item.ktpNumber}</td>
                  <td>{item.npwpNumber}</td>
                  <td>{item.passportNumber}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

Home.propTypes = {};
export default Home;
