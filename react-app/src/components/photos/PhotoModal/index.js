import React, { useState } from 'react';
import Modal from '../../../context/Modal';
import PhotoSRP from './PhotoSRP';
import CommentsForm from "../../comments/CommentsForm"
import './index.css'


export default function PhotoModal ({photo}) {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="photo-container">
            <img className="photo" src={photo.photo_url} onClick={() => setShowModal(true)}/>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} portalClassName='modal'>
                    <PhotoSRP photo={photo}/>
                </Modal>
            )}
            <p className="caption">{photo.caption}</p>
            <button className="like"><img src="/img/heart.png" alt="like"></img></button>
            <CommentsForm photo={photo} />
        </div>
    )
}
