import React, { useState } from 'react';
import Modal from '../../../context/Modal';
import { useDispatch, useSelector } from "react-redux"
import PhotoSRP from './PhotoSRP';
import CommentsForm from "../../comments/CommentsForm"
import './index.css'
import { removeLike, createLike } from '../../../store/like';


export default function PhotoModal ({photo}) {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()
    const likes = useSelector(state => state.session.likes)
    const like = likes.find(like => like.photo_id === photo.id)

    const handleLike = (e) => {
        e.preventDefault()
        if (like) {
            dispatch(removeLike(like.id))
        } else {
            dispatch(createLike(photo.id))
        }
    }

    return (
        <div className="photo-container">
            <img className="photo" src={photo.photo_url} onClick={() => setShowModal(true)}/>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} portalClassName='modal'>
                    <PhotoSRP photo={photo}/>
                </Modal>
            )}
            <p className="caption">{photo.caption}</p>
            {like ? (
                <button
                    onClick={handleLike}
                >Unlike</button>
            ) : (
                <button
                    onClick={handleLike}
                >Like</button>
            )
            }
            <CommentsForm photo={photo} />
        </div>
    )
}
