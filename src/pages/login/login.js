import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Col, Container, Form, Input, Row, FormGroup, Label, Button } from 'reactstrap';
import { ErrorMessage, Formik } from 'formik';
import apis from '../../apis';
import { setToken, setUser } from '../../services/storages/userStorage';
import { LoginSchema } from './login.validator';
import { Pages } from '../../routes/constants';
import baseApi from '../../apis/base.api';

const Login = () => {
  const history = useHistory();
  const [error, setError] = useState();
  const submit = async (values) => {
    return apis.auth
      .login(values.username, values.password)
      .then((value) => {
        setToken(value.token);
        baseApi.setToken(value.token);
        setUser({ fullName: value.fullName });
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
          <h2>Login</h2>
          <Formik
            initialValues={{ username: '', password: '' }}
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
                  <Link to={Pages.register}>Register?</Link>
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

export default Login;
