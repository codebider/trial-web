import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Col, Container, Form, Input, Row, FormGroup, Label, Button } from 'reactstrap';
import { ErrorMessage, Formik } from 'formik';
import apis from '../../apis';
import { LoginSchema } from './register.validator';
import { Pages } from '../../routes/constants';

const Register = () => {
  const history = useHistory();
  const [error, setError] = useState();
  const submit = async (values) => {
    return apis.auth
      .register(values)
      .then(() => {
        alert('Success');
        history.push(Pages.login);
      })
      .catch((error_) => {
        setError(error_.message);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Register</h2>
          <Formik
            initialValues={{ username: '', password: '', fullName: '' }}
            validationSchema={LoginSchema}
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
                <FormGroup>
                  <Label for="fullName">Full name</Label>
                  <Input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="fullName"
                    id="fullName"
                    placeholder="fullName"
                    value={values.fullName}
                  />
                  <small>
                    <ErrorMessage name="fullName" />
                  </small>
                </FormGroup>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="username"
                    value={values.username}
                  />
                  <small>
                    <ErrorMessage name="username" />
                  </small>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Password</Label>
                  <Input
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    id="password"
                    placeholder="password"
                    value={values.password}
                  />
                  <small>
                    <ErrorMessage name="password" />
                  </small>
                </FormGroup>
                <FormGroup className="text-right">
                  <Link to={Pages.login}>Login?</Link>
                </FormGroup>
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

export default Register;
