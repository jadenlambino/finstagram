import React, { useState } from 'react';
import Modal from '../../../context/Modal';
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import PhotoSRP from './PhotoSRP';
import CommentsForm from "../../comments/CommentsForm"
import { removeLike, createLike } from '../../../store/like';


export default function PhotoModal({ photo }) {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()
    const likes = useSelector(state => state.session.likes)
    const like = likes?.find(like => like.photo_id === photo.id)
    const { userId } = useParams()

    const handleLike = (e) => {
        e.preventDefault()
        if (like) {
            dispatch(removeLike(like.id))
        } else {
            dispatch(createLike(photo.id))
        }
    }

    return (
        // <>
        //     <h1>PHOTOMODAL</h1>
        <div className="photo-container">
            {!userId && (
                <div>
                    <Link to={`/users/${photo.user_id}`}>{photo.username}</Link>
                </div>
            )}
            <img className="photo" src={photo.photo_url} onClick={() => setShowModal(true)} />
            {showModal && (
                <Modal onClose={() => setShowModal(false)} portalClassName='modal'>
                    <PhotoSRP photo={photo} />
                </Modal>
            )}
            {!userId && <p className="caption">{photo.caption}</p>}
            {!userId && (like ? (
                <button
                    onClick={handleLike}
                >Unlike</button>
            ) : (
                <button
                    onClick={handleLike}
                >Like</button>
            ))
            }
            {!userId && <CommentsForm photo={photo} />}
        </div>
        // </>
    )
}
