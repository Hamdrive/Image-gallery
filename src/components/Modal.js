import React from "react";

function Modal({ isEnlarged, setIsEnlarged, imgInfo }) {
  return (
    <div className="modalbkg" onClick={() => setIsEnlarged(null)}>
      <div className="modal">
        <div className="modalimg">
          <img src={isEnlarged} alt="" />
        </div>
        <div className="imginfo">
          <p className="desc">
            Description:{" "}
            {imgInfo.alt_description ? imgInfo.alt_description : " None"}
          </p>
          <p className="desc">
            Author: {imgInfo.user.name ? imgInfo.user.name : " None"}
          </p>
          <p className="desc">
            Location:{" "}
            {imgInfo.location.country ? imgInfo.location.country : " None"}
          </p>
          <p className="desc">
            Shot using: {imgInfo.exif.model ? imgInfo.exif.model : " None"}
          </p>
          <p className="desc">
            Date added:{" "}
            {imgInfo.created_at ? imgInfo.created_at.substring(0, 10) : " None"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
