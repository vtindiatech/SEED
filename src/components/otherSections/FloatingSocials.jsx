// FloatingSocial.jsx
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { SiX } from "react-icons/si";
// import './FloatingSocial.css';

export default function FloatingSocials() {
  return (
    <div className="floating-social">

      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="facebook">
        <FaFacebookF />
      </a>
      <a href="https://wa.me/919000000000" target="_blank" rel="noreferrer" className="whatsapp">
        <FaWhatsapp />
      </a>

      <a
        href="https://twitter.com/yourhandle"
        target="_blank"
        rel="noreferrer"
        className="social-icon x"
      >
        <SiX />
      </a>

      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="linkedin">
        <FaLinkedinIn />
      </a>
    </div>
  );
}
