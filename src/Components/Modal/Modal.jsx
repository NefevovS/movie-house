import React from "react";
import s from "./Modal.module.css";

import Quality2160p from "../../assets/modal/image/Components/Quality2160p";
import Quality720p from "../../assets/modal/image/Components/Quality720p";
import Quality1080p from "../../assets/modal/image/Components/Quality1080p";




const Modal = ({torrents,setModalVisible,modalVisible}) => {
const stylesArray=[s.modalWrapper]
    if(modalVisible) stylesArray.push(s.active)
  return (
    <div className={stylesArray.join(" ")} onClick={()=>setModalVisible(false)}>
      <div className={s.modalConteiner} onClick={(e)=>e.stopPropagation()}>
        <div className={s.modalTitle}>Select movie quality</div>
          <span className={s.modalClose} onClick={()=>setModalVisible(false)}></span>
          <div className={s.modalContent}>
                  {torrents?.map((torrent)=><div className={s.modalTorrent}>
                      {(torrent.quality==="720p"&& <Quality720p/>)||
                          (torrent.quality==="1080p"&&<Quality1080p/>)||
                          (torrent.quality==="2160p"&&<Quality2160p/>)
                      }
                      <p className={s.filetype}>{torrent.type}</p>
                      <p>File size</p>
                      <p className={s.fileSize}>{torrent.size}</p>
                      <a href={torrent.url} className={s.modalBtn}>Download</a>
                  </div>)}

                  {/*<p>{torrents.type}</p>*/}



          </div>

      </div>
    </div>
  );
};

export default Modal;