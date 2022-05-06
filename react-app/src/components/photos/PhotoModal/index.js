import React, { useState } from 'react';
import Modal from '../../../context/Modal';
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import PhotoSRP from './PhotoSRP';
import CommentsForm from "../../comments/CommentsForm"
import { removeLike, createLike } from '../../../store/like';


export default function PhotoModal ({photo}) {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const following = useSelector(state => state.session.following)
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

    let followedUser
    if (Object.keys(following)) followedUser = following[photo.user_id]

    return (
        <div className="photo-container">
            {followedUser ? (
                <div>
                    <Link to={`/users/${photo.user_id}`}>{followedUser.username}</Link>
                </div>
            )
                : (
                    <div>
                        <Link to={`/users/${photo.user_id}`}>{user.username}</Link>
                    </div>
                )
            }
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
