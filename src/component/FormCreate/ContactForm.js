import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import "../../Style/ContactForm.css";
import DashboardNavbar from "../DashBoard/DashboardNavbar/DashboardNavbar";
const ContactForm = () => {
  const [email, setEmail] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2cpaksc",
        "portfolio_fojptya",
        e.target,
        "user_uzAdPfmx6TBIUFL6PqG5Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result) {
            setEmail(true);
          } else {
            setEmail(false);
          }
        },
        (error) => {
          console.log(error.text);
          if (error) {
            setEmail(false);
          } else {
            setEmail(false);
          }
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <DashboardNavbar/>
      <div className="container mt-2">
        <h3 className="form-h1">Contact with Us</h3>
        <form className='form' onSubmit={sendEmail}>
          <input
            required
            className="form-control"
            id="name"
            defaultValue=""
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />{" "}
          <br />
          {errors.name && (
            <span className="text-error">This field is required</span>
          )}
          <input
            required
            className="form-control"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && (
            <span className="text-error">This field is required</span>
          )}
          <textarea
            required
            className="form-control"
            type="text-area"
            placeholder="Enter your message"
            {...register("message", { required: true })}
          />
          <br />
          {errors.message && (
            <span className="text-error">This field is required</span>
          )}{" "}
          <br />
          <input className="btn btn-success" value="Send Message" type="submit" />
          <p style={{ color: email ? "green" : "red", fontWeight: "bold" }}>
            {email && "Successfully send your valuable message.."}
          </p>
          <p style={{ color: email === false && "red", fontWeight: "bold" }}>
            {email === false && "Please Try again.."}
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;