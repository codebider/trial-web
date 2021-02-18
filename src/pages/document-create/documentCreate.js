import React, { useState } from 'react';
import { Col, Container, Form, Input, Row, FormGroup, Label, Button } from 'reactstrap';
import { ErrorMessage, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import apis from '../../apis';
import { DocumentFields, documentValidator } from '../../commons/constants';
import { Pages } from '../../routes/constants';

const DocumentCreate = () => {
  const history = useHistory();
  const [error, setError] = useState();
  const submit = async (values) => {
    return apis.document
      .createDocuments(values)
      .then(() => {
        alert('Create successful');
        history.push(Pages.home);
      })
      .catch((error_) => {
        setError(error_.message);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Create new document</h2>
          <Formik
            initialValues={{}}
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
        </Col>
      </Row>
    </Container>
  );
};

export default DocumentCreate;
