import React, { useState } from "react";
import "./index.css";
import db from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

export default function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    async function addData() {
      try {
        const docRef = await addDoc(collection(db, "messages"), {
          values,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    addData();
  }
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={(e) => handleSubmit(e)}>
        {/* Uncomment the next line to show the success message */}
        {isSubmitted && (
          <div class="success-message">
            Success! Thank you for contacting us
          </div>
        )}
        <input
          id="name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={(e) => handleInputChange(e)}
          required
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}

        <input
          id="email"
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input
          id="mobile-number"
          class="form-field"
          type="number"
          placeholder="Mobile number"
          name="mobileNumber"
          value={values.mobileNumber}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input
          id="subject"
          class="form-field"
          type="text"
          placeholder="Subject"
          name="subject"
          value={values.subject}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input
          id="message"
          class="form-field"
          type="text"
          placeholder="Message"
          name="message"
          value={values.message}
          onChange={(e) => handleInputChange(e)}
          required
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button
          class="form-field"
          type="submit"
          // onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
