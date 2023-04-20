import React, { useState } from "react";
import image2 from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import error from "../../assets/contact/desktop/icon-error.svg";
import { Link } from "react-router-dom";

function ContactUs() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [phoneText, setPhoneText] = useState("");

  const handleName = (e) => {
    e.target.value == "" ? setName(false) : setName(true);
    e.target.value == "" ? setNameText("Can't be empty") : setNameText("");
  };

  const handleEmail = (e) => {
    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    e.target.value == ""
      ? setEmail(false)
      : e.target.value != "" &&
        !String(e.target.value).toLowerCase().match(validateEmail)
      ? setEmail(false)
      : setEmail(true);
    e.target.value == ""
      ? setEmailText("Can't be empty")
      : e.target.value != "" &&
        !String(e.target.value).toLowerCase().match(validateEmail)
      ? setEmailText("Not valid email")
      : setEmailText("");
  };

  const handlePhone = (e) => {
    e.target.value == ""
      ? setPhone(false)
      : e.target.value.length != 8
      ? setPhone(false)
      : setPhone(true);
    e.target.value == ""
      ? setPhoneText("Can't be empty")
      : e.target.value.length != 8
      ? setPhoneText("Should contain 8 numbers")
      : setPhoneText("");
  };

  return (
    <div className="contact-us">
      <img className="absolute" src={image2}></img>
      <div>
        <h1>Contact Us</h1>
        <p style={{ fontSize: "max(14px, 1.5vw)" }}>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form>
        <div className="input-flex">
          <input
            onChange={handleName}
            type="text"
            placeholder="Name"
            style={{ backgroundImage: name == false ? `url(${error})` : null }}
          />
          <p>{nameText}</p>
        </div>
        <div className="input-flex">
          <input
            onChange={handleEmail}
            type="email"
            placeholder="Email Address"
            style={{ backgroundImage: email == false ? `url(${error})` : null }}
          />
          <p>{emailText}</p>
        </div>
        <div className="input-flex">
          <input
            onChange={handlePhone}
            type="number"
            placeholder="Phone"
            style={{ backgroundImage: phone == false ? `url(${error})` : null }}
          />
          <p>{phoneText}</p>
        </div>
        <textarea name="message" placeholder="Your Message"></textarea>
        <Link to={name && email && phone ? "/designo-multi-page" : null}>
          <button>SUBMIT</button>
        </Link>
      </form>
    </div>
  );
}

export default ContactUs;
