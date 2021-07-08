//@ts-check
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Button from "../components/forms/button";
import Input from "../components/forms/input";

const Login = () => {
  const formikConfig = {
    initialValues: {
      user: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values.user, values.password);
    },
    validationSchema: Yup.object().shape({
      user: Yup.string()
        .test("Validacion de email", "Email no válido", (value) => {
          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(
            value
          );
        })
        .required("Campo requerido"),
      password: Yup.string().required("Campo requerido"),
    }),
    validateOnChange: true,
    validateOnBlur: false,
  };

  return (
    <section className="container section flex-c-c">
      <Formik {...formikConfig}>
        <Form className="flexcol-s-c form">
          <Input placeholder="Usuario" name="user" />
          <Input placeholder="Contraseña" name="password" type="password" />
          <Button className="submit">Login</Button>
        </Form>
      </Formik>
    </section>
  );
};

export default Login;
