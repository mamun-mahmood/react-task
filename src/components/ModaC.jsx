import React, { useState } from "react";

function ModalC({ contact }) {
  const [showModalC, setShowModalC] = useState(false);

  return (
    <>
      <li
        onClick={() => setShowModalC(!showModalC)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
          backgroundColor: "white",
          marginBottom: "5px",
          cursor: "pointer",
        }}
      >
        ID: {contact.id} Phone: {contact.phone} Country: {contact.country}
      </li>
      {showModalC && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            backdropFilter: "blur(4px)",
            padding: "2rem",
            textAlign: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "80%",
            borderRadius: "1rem",
            border: "1px solid #46139f",
          }}
        >
          <h2>Modal C</h2>
          {/* Display contact details */}
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg btn-outline"
              style={{
                backgroundColor: "#46139f",
              }}
              onClick={() => setShowModalC(!showModalC)}
            >
              Close
            </button>
          </div>
          <div
            style={{
              textAlign: "start",
              marginTop: "5px",
            }}
          >
            <p>ID: {contact.id}</p>
            <p>Phone: {contact.phone}</p>
            <p>Country: {contact.country}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalC;
