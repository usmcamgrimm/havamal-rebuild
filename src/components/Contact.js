import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { navigate } from 'gatsby'
import styled from 'styled-components';

const FormWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;

const SubmitBtn = styled.button`
  background-color: #004b87;
`;

export default function Contact() {
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '', 
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(40, 'Must be 40 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Must be a valid email address')
          .required('Required'),
        message: Yup.string()
          .required('Required'),
      })}
      onSubmit={
        (values, actions) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contactForm", ...values })
          })
          .then(() => {
            navigate("/FormSuccess")
            actions.resetForm()
          })
          .catch(() => {
            alert('Error');
          })
          .finally(() => actions.setSubmitting(false))
        }
      }
    >
      <FormWrapper className="pt-8">
        <Form
          className="flex flex-col justify-center items:center;"
          name="contactForm"
          data-netlify={true}
        >
          <label htmlFor="name">
            <p className="font-grenze text-blue-lighter text-xl">Your Name</p>
          </label>
          <Field
            className="w-full mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            placeholder="Name"
          />
          <ErrorMessage name="name" />

          <label htmlFor="email">
            <p className="font-grenze text-blue-lighter text-xl pt-4">Email Address</p>
          </label>
          <Field
            className="w-full mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            placeholder="Email address"
          />
          <ErrorMessage name="email" />

          <label htmlFor="message">
           <p className="font-grenze text-blue-lighter text-xl pt-4">Message</p>
          </label>
          <Field
            className="form-textarea w-full h-24 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
            as="text-area"
            component="textarea"
            name="message"
            placeholder="Type your message to Havamal..."
          />
          <ErrorMessage name="message" />

          <div className="mt-4">
            <SubmitBtn 
              className="text-xl font-grenze text-yellow text-center tracking-wide p-3 mb-2 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-blue-darker"
              type="submit"
            >
              Submit Message
            </SubmitBtn>
          </div>
        </Form>
      </FormWrapper>
    </Formik>
  )
}