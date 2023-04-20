import React from "react";
import "../GlobalCss/contact.css";
import Header from "../components/header";
import Touch from "../components/touch";
import Footer from "../components/footer";
import MenuPop from "../components/menu-pop";
import ContactUs from "../components/contact/contact-us";
import Countries from "../components/countries";

function Contact() {
  return (
    <div className="contact">
      <Header />
      <MenuPop />
      <ContactUs />
      <Countries />
      <Touch />
      <Footer />
    </div>
  );
}

export default Contact;
