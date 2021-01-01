import React from 'react'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'

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
      <label htmlFor="name">
        <p>Your Name</p>
        {errors.name && <span>Error message</span>}
        <input name="name" ref={register({ required: true })} />
      </label>
      <label htmlFor="email">
        <p>Email Address</p>
        {errors.email && <span>Please use a properly formatted email address</span>}
        <input
          name="email"
          ref={register({
            required: true,
            pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          })}
        />
      </label>
      <label htmlFor="message">
        <p>Type Your Message...</p>
        <textarea rows="4" name="message" ref={register()} />
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
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}