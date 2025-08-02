import React from "react";
export default function WhatsappButton() {
  const whatsappLink = `https://wa.me/923194189357`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 1000,
        color: "#fff",
        borderRadius: "50%",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        fontSize: "28px",
        textDecoration: "none",
      }}
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <img src="whatsapp.png" alt="" />
    </a>
  );
}
