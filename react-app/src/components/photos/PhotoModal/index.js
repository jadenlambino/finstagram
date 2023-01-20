import React, { useState } from 'react';
import Modal from '../../../context/Modal';
import { useDispatch, useSelector } from "react-redux"
import PhotoSRP from './PhotoSRP';
import { removeLike, createLike } from '../../../store/like';
import "./PhotoContainer.css"


export default function PhotoModal({ photo }) {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()
    const likes = useSelector(state => state.session.likes)
    const like = likes?.find(like => like.photo_id === photo.id)

    return (
        // <>
        //     <h1>PHOTOMODAL</h1>
        <>
            {/* {!userId && (
                <span>
                    <h1>
                        <Link to={`/users/${photo.user_id}`} className='p-user'>{photo.username}</Link>
                    </h1>
                </span>
            )} */}
            <img className="photo" src={photo.photo_url} onClick={() => setShowModal(true)} />
            {showModal && (
                <Modal onClose={() => setShowModal(false)} portalClassName='modal'>
                    <PhotoSRP photo={photo} />
                </Modal>
            )}

            {/* <h1 className="caption">{photo.caption}</h1>
            {like ? (
                <button id='like-dislike'
                    onClick={handleLike}
                >❤️</button>
            ) : (
                <button id='like-dislike'
                    onClick={handleLike}
                >🤍</button>
            )
            } */}
        </>
        // </>
    )
}
