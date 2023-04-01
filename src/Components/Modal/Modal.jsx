import React from "react";
import s from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={s.modalWrapper}>
      <div className={s.modalConteiner}>
        <div className={s.modalTitle}>Select movie quality</div>
          <span className={s.modalClose}></span>
          <div className={s.modalContent}>
              <div className={s.modalTorrent}>asdas</div>
              <div className={s.modalTorrent}>asdas</div>
              <div className={s.modalTorrent}>asdas</div>

          </div>

      </div>
    </div>
  );
};

export default Modal;