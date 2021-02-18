import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import apis from '../../apis';
import { goTo } from '../../routes/utils';
import { Pages } from '../../routes/constants';
import DeleteModal from './deleteModal';

const Home = () => {
  const history = useHistory();
  const [documents, setDocuments] = useState();
  const [deleteDocument, setDeleteDocument] = useState();
  const loadData = () => {
    apis.document.listDocuments().then((data) => {
      setDocuments(data);
    });
  };

  const handleDelete = (id) => {
    apis.document.deleteDocuments(id).then(() => {
      alert('Delete successful');
      loadData();
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <h1>Home</h1>
      <Row>
        <Container className="text-right">
          <Button
            size="sm"
            color="primary"
            outline
            onClick={() => history.push(Pages.documentCreate)}
          >
            Add new
          </Button>
        </Container>
      </Row>
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
              <th>Action</th>
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
                  <td>
                    <Button
                      size="sm"
                      color="primary"
                      outline
                      onClick={() => history.push(goTo(Pages.documentDetail, { id: item.id }))}
                    >
                      View
                    </Button>
                    <Button
                      size="sm"
                      color="secondary"
                      outline
                      onClick={() => history.push(goTo(Pages.documentEdit, { id: item.id }))}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      color="danger"
                      outline
                      onClick={() => setDeleteDocument(item)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <DeleteModal
          document={deleteDocument}
          onToggle={() => setDeleteDocument()}
          onYes={handleDelete}
        />
      </Row>
    </Container>
  );
};

Home.propTypes = {};
export default Home;
