import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Form, Input, Row, FormGroup, Label, Button } from 'reactstrap';
import { ErrorMessage, Formik } from 'formik';
import apis from '../../apis';
import { DocumentFields, documentValidator } from '../../commons/constants';

const DocumentEdit = () => {
  const [document, setDocument] = useState();
  const { id } = useParams();

  useEffect(() => {
    apis.document.getDocumentDetail(id).then((data) => {
      setDocument(data);
    });
  }, [id]);

  const [error, setError] = useState();
  const submit = async (values) => {
    return apis.document
      .updateDocuments(id, values)
      .then(() => {
        alert('Update successful');
      })
      .catch((error_) => {
        setError(error_.message);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Edit document</h2>
          {document && (
            <Formik
              initialValues={document}
              validationSchema={documentValidator}
              onSubmit={(values, { setSubmitting }) => {
                submit(values).finally(() => {
                  setSubmitting(false);
                });
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <Form>
                  {error && <small>Error: {error}</small>}
                  {DocumentFields.map((field) => (
                    <FormGroup key={field.key}>
                      <Label for="name">{field.display}</Label>
                      <Input
                        type={field.type}
                        name={field.key}
                        id={field.key}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={field.key}
                        value={values[field.key]}
                      />
                      <small className="error">
                        <ErrorMessage name={field.key} />
                      </small>
                    </FormGroup>
                  ))}
                  <Button onClick={handleSubmit} disabled={isSubmitting}>
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DocumentEdit;
