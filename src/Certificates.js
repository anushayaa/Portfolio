import React, { useState } from "react";
import "./Certificates.css";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="certificates" id="certificates">
      <h2 className="cert-title">Certificates</h2>

      <div className="cert-box">
        <button
          className="cert-btn"
          onClick={() => setSelectedImage("/java.jpeg")}
        >
          Java Programming Certificate
        </button>

        <button
          className="cert-btn"
          onClick={() => setSelectedImage("/nptel.jpeg")}
        >
          NPTEL Certificate
        </button>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </span>

            <img
              src={selectedImage}
              alt="Certificate"
              className="modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;