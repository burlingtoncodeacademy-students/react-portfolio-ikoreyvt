import React from "react";

const Contact = ({ setModalOpen }) => {
  const fullPage = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(51, 47, 48, .7)",
    zIndex: 1,
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Submitted!")
    setModalOpen(false)
  };

  return (
    <div style={fullPage}>
      <form id="contactForm" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Email..." />
        <input type="text" placeholder="What would you like to say..." />
        <input type="submit" />
      </form>
      <button onClick={() => setModalOpen(false)}>Cancel</button>
    </div>
  );
};

export default Contact;
