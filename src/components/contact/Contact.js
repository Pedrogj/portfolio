import { Formik } from "formik";
import { useState } from "react";
import {
  Wrapper,
  FormMessage,
  Label,
  Input,
  InputContent,
  Button,
  TextArea,
} from "./ContactStyle";

export const Contact = () => {
  const [sendForm, setSendForm] = useState();

  return (
    <Wrapper>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validate={(values) => {
          let msgErrors = {};

          // Validation name
          if (!values.name) {
            msgErrors.name = "Ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            msgErrors.name = "El nombre solo puede contener letras y espacios";
          }

          // Validation email
          if (!values.email) {
            msgErrors.email = "Ingresa un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            msgErrors.email =
              "El correo solo puede contener letras, números, puntos, guiones y guion bajo";
          }

          // Validation message
          if (!values.message) {
            msgErrors.message = "Ingresa un mensaje";
          }

          return msgErrors;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log("Send Message!");
          setSendForm(true);
          setTimeout(() => setSendForm(false), 5000);
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <FormMessage onSubmit={handleSubmit}>
            <InputContent>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && <p>{errors.name}</p>}
            </InputContent>
            <InputContent>
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <p>{errors.email}</p>}
            </InputContent>
            <Label>Message</Label>
            <TextArea
              name="message"
              id="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.message && errors.message && <p>{errors.message}</p>}
            <Button type="submit">Send</Button>
            {sendForm && <p>Formulario enviando con Exito!</p>}
          </FormMessage>
        )}
      </Formik>
    </Wrapper>
  );
};
