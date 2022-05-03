import React, { useState } from 'react';
import { Modal } from '../context/modal';
import PhotoSRP from './PhotoSRP';


export default function PhotoModal () {

    const [showModal, setShowModal] = useState(False);

    return (
        <>
            <button onClick={() => setShowModal(True)}>Show</button>
            {showModal && (
                <Modal onClose={() => setShowModal(False)}>
                    <PhotoSRP/>
                </Modal>
            )}
        </>
    )
}
