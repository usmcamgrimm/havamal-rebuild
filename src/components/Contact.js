import React from 'react'
import { useForm } from 'react-hook-form'
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
    <FormWrapper className="pt-8">
      <form
        className="flex flex-col justify-center items:center;"
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
        <label htmlFor="name">
          <p className="font-grenze text-blue-lighter text-xl">Your Name</p>
          {errors.name && <span>Error message</span>}
          <input className="w-full mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline" name="name" ref={register({ required: true })} />
        </label>
        <label htmlFor="email">
          <p className="font-grenze text-blue-lighter text-xl mt-4">Email Address</p>
          {errors.email && <span>Please use a properly formatted email address</span>}
          <input
            className="w-full mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
            name="email"
            ref={register({
              required: true,
              pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            })}
          />
        </label>
        <label htmlFor="message">
          <p className="font-grenze text-blue-lighter text-xl mt-4">Type Your Message...
          </p>
          <textarea
            className="w-full h-24 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
            name="message" 
            ref={register()}
          />
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
        <div className="mt-4">
          <button className="text-xl font-grenze text-yellow text-center tracking-wide p-3 mb-2 rounded-lg w-full bg-blue focus:outline-none focus:shadow-outline hover:bg-blue-darker" type="submit">Submit Message</button>
        </div>
      </form>
    </FormWrapper>
  )
}