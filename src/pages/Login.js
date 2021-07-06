import { Form, Formik } from "formik";
import React from "react";
import Button from "../components/forms/button";
import Input from "../components/forms/input";

const Login = () => {
  const formik = {
    initialValues: {
      user: "",
      password: "",
    },
    onSubmit: () => {},
    validate: validateForm,
    validateOnChange: false,
    validateOnBlur: true,
  };

  return (
    <section className="container section flex-c-c">
      <Formik {...formik}>
        <Form className="flexcol-s-c form">
          <Input placeholder="Usuario" name="user" />
          <Input placeholder="Contraseña" name="password" type="password" />
          <Button className="submit">Login</Button>
        </Form>
      </Formik>
    </section>
  );
};

const validateForm = (values) => {
  const errors = {};
  if (values.user.length < 1) errors.user = "Usuario demasiado corto";
  if (values.password.length < 1)
    errors.password = "Contraseña demasiado corta";

  return errors;
};

export default Login;
