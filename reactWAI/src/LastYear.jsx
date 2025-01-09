import React, { useEffect, useRef } from "react";
import "./LastYear.css";
import Pic1 from "./assets/pic1.jpg";
import Pic2 from "./assets/pic2.jpg";
import Pic3 from "./assets/pic3.jpg";
import Pic4 from "./assets/pic4.jpg";
import Pic5 from "./assets/pic5.jpg";

const LastYear = () => {
  const scrollRef = useRef(null);

  const openModal = (src) => {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = src;
  };

  const closeModal = () => {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  };

  useEffect(() => {
    const scrollImages = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 3,
          behavior: "smooth",
        });
      }
    };

    const interval = setInterval(scrollImages, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="screen">

      <div className="main-scroll-div">
        <div className="cover">
          <div className="scroll-images" ref={scrollRef}>
            <div className="child" onClick={() => openModal(Pic1)}>
              <img className="child-img" src={Pic1} alt="Event 1" />
            </div>
            <div className="child" onClick={() => openModal(Pic2)}>
              <img className="child-img" src={Pic2} alt="Event 2" />
            </div>
            <div className="child" onClick={() => openModal(Pic3)}>
              <img className="child-img" src={Pic3} alt="Event 3" />
            </div>
            <div className="child" onClick={() => openModal(Pic4)}>
              <img className="child-img" src={Pic4} alt="Event 4" />
            </div>
            <div className="child" onClick={() => openModal(Pic5)}>
              <img className="child-img" src={Pic5} alt="Event 5" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for displaying large image */}
      <div className="modal" id="imageModal">
        <span className="close" onClick={closeModal}>&times;</span>
        <img id="modalImage" src="" alt="Large Image" />
      </div>
    </div>
  );
};

export default LastYear;
