import React, { useState } from 'react';
import Modal from '../../../context/Modal';
import PhotoSRP from './PhotoSRP';


export default function PhotoModal ({photo}) {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Show</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h1>Hello From Modal</h1>
                    <PhotoSRP photo={photo}/>
                </Modal>
            )}
        </>
    )
}
