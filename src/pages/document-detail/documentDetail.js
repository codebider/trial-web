import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import apis from '../../apis';

const DocumentDetail = () => {
  const [document, setDocument] = useState();
  const { id } = useParams();

  useEffect(() => {
    apis.document.getDocumentDetail(id).then((data) => {
      setDocument(data);
    });
  }, [id]);

  return (
    <Container>
      <h1>Detail</h1>
      <p>
        {document && (
          <>
            <p>{document.id}</p>
            <p>{document.name}</p>
            <p>{document.email}</p>
            <p>{document.phoneNumber}</p>
            <p>{document.address}</p>
            <p>{document.ktpNumber}</p>
            <p>{document.npwpNumber}</p>
            <p>{document.passportNumber}</p>
          </>
        )}
      </p>
    </Container>
  );
};

DocumentDetail.propTypes = {};
export default DocumentDetail;
