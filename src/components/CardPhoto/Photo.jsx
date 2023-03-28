import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

export default function Photo({photo}) {

  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }


  return (
    <div className='photo'  >
      <img  src={photo.urls.regular} alt='img_photo' onClick={handleClick}/>
      {showModal && (
        <div className="modal" >
        <button onClick={handleClose}><AiOutlineClose size={30}/></button>
          <div className="modal-content">
            <img src={photo.urls.regular} />
          </div>
          
        </div>
        
      )}
      
    </div>
  )
}
