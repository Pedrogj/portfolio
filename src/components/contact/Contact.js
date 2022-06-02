import { Formik } from "formik";
import { useRef } from "react";
import {
  Wrapper,
  Container,
  Row,
  FormMessage,
  Label,
  Input,
  InputContent,
  Button,
  TextArea,
  TextError,
} from "./ContactStyle";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();

  return (
    <Container id="contact">
      <Wrapper>
        <Row>
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
                msgErrors.name = "*Ingresa un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                msgErrors.name =
                  "*El nombre solo puede contener letras y espacios";
              }

              // Validation email
              if (!values.email) {
                msgErrors.email = "*Ingresa un correo";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  values.email
                )
              ) {
                msgErrors.email =
                  "*El correo solo puede contener letras, números, puntos, guiones y guion bajo";
              }

              // Validation message
              if (!values.message) {
                msgErrors.message = "*Ingresa un mensaje";
              }

              return msgErrors;
            }}
            onSubmit={(values, { resetForm }) => {
              // console.log(values);
              // console.log("Send Message!");
              emailjs
                .sendForm(
                  "service_mclij66",
                  "template_275tnbu",
                  form.current,
                  "6vEnCAfGk8jGxhw70"
                )
                .then(
                  (result) => {
                    // console.log(result.text);
                  },
                  (error) => {
                    console.log(error.text);
                  }
                );

              resetForm();
              toast.success("Enviado...", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
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
              <FormMessage ref={form} onSubmit={handleSubmit}>
                <InputContent>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name && (
                    <TextError>{errors.name}</TextError>
                  )}
                </InputContent>
                <InputContent>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <TextError>{errors.email}</TextError>
                  )}
                </InputContent>
                <Label>Message</Label>
                <TextArea
                  name="message"
                  id="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.message && errors.message && (
                  <TextError>{errors.message}</TextError>
                )}
                <Button type="submit">Send</Button>
                <ToastContainer />
              </FormMessage>
            )}
          </Formik>
        </Row>
      </Wrapper>
    </Container>
  );
};
