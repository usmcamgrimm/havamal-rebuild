import React from 'react'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
`;

const InputFlex = styled.div`
  display: flex;
  justify-content: center;  
`;

export default function Contact() {
  const { register, handleSubmit, errors, reset } = useForm();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const handlePost = (formData, event) => {
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...formData }),
    })
      .then((response) => {
        navigate("/FormSuccess/")
        reset()
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    event.preventDefault()
  }

  return (
    <FormContainer>
      <FormWrapper className="pt-8">
        <form
          onSubmit={handleSubmit(handlePost)}
          name="contactForm"
          method="POST"
          action="/FormSuccess/"
          data-netlify="true"
          netlify-honeypot="got-ya"
        >
          <input type="hidden" name="form-name" value="contactForm" />
          <input
            type="hidden"
            name="formId"
            value="contactForm"
            ref={register()}
          />
          <InputFlex className="space-x-4">
            <label htmlFor="name">
              <p className="font-grenze text-blue-lighter text-xl">Your Name</p>
              {errors.name && <span>Error message</span>}
              <input name="name" ref={register({ required: true })} />
            </label>
            <label htmlFor="email">
              <p className="font-grenze text-blue-lighter text-xl">Email Address</p>
              {errors.email && <span>Please use a properly formatted email address</span>}
              <input
                name="email"
                ref={register({
                  required: true,
                  pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                })}
              />
            </label>
          </InputFlex>
          <InputFlex className="pt-4">
            <label htmlFor="message">
              <p className="font-grenze text-blue-lighter text-xl">Type Your Message...
              </p>
              <textarea rows="4" columns="6" name="message" ref={register()} />
            </label>
            <label
              htmlFor="got-ya"
              style={{
                position: "absolute",
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                height: "1px",
                width: "1px",
                margin: "-1px",
                padding: "0",
                border: "0",
              }}
            >
              Don't fill this out if you're a human:
              <input tabIndex="1" name="got-ya" ref={register()} />
            </label>
          </InputFlex>
          <div>
            <button className="text-yellow" type="submit">Submit</button>
          </div>
        </form>
      </FormWrapper>
    </FormContainer>
  )
}