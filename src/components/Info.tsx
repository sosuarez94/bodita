import React, { useState } from "react";
import Modal from "./Modal";

const Info: React.FC = () => {

  const [modalImg, setModalImg] = useState<string | null>(null);

  const mostrarModal = (imgName: string) => {
    setModalImg(imgName);
  };

  const cerrarModal = () => {
    setModalImg(null);
  };


  return (
    <section className="info">
      <h2>Coincidamos...!</h2>
      <div className="date">
        <h3>Viernes</h3>
        <h3 className="center">21</h3>
        <h3>Nov</h3>
      </div>
      <div className="year"> 2025 </div>
      <div className="three-cont">
        <div className="touch-buttons"   onClick={() => mostrarModal("church.png")}>
          <img src="assets/icons/church.png" alt="church.png"/>
        </div>
        <div className="touch-buttons"   onClick={() => mostrarModal("dinner.png" )}>
          <img src="assets/icons/dinner.png" alt="dinner.png" />
        </div>
        <div className="touch-buttons"   onClick={() => mostrarModal("mate.png")}>
          <img src="assets/icons/mate.png" alt="mate.png" />
        </div>
      </div>
      <div className="two-cont">
        <div className="touch-buttons"   onClick={() => mostrarModal("t-shirt.png")}>
          <img src="assets/icons/t-shirt.png" alt="t-shirt.png"/>
        </div>
        <div className="touch-buttons"   onClick={() => mostrarModal("gif.png")}>
          <img src="assets/icons/gif.png" alt="gif.png"/>
        </div>
      </div>
      <hr />

      {modalImg && <Modal info={modalImg} onClose={cerrarModal} />}
    </section>
  );
};

export default Info;
