import React from "react";
import type { Data } from "../constant/messages";
import { messageInfo } from "../constant/messages";

interface ModalProps {
  info: string;
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({ info, onClose }) => {
  const [data]: Data[] = messageInfo.filter((f) => f.img === info);

  return (
    <div className="modal">
      <div className="container">
        <div className="touch-buttons">
          <img src={`assets/icons/${data.img}`} alt={data.title} />
        </div>
        <div className="central">
          <h2>{data.title}</h2>
          {data.link ? (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="h3"
            >
              {data.place}
            </a>
          ) : (
            <h3 className="alias">{data.place}</h3>
          )}
          {data.time && <h4>{data.time}</h4>}
          <h4>{data.ubication}</h4>
          <p>{data.messages}</p>
          {data.extra && (
            <div className="content-extra">
              <img src={`assets/icons/${data.img}`} alt={data.title} />
              <span className="alias">{data.extra}</span>
            </div>
          )}
        </div>
        <div className="close-buttons" onClick={onClose}>
          <img src="assets/icons/close.png" alt="wind" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
