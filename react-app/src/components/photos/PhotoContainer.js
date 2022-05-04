import { useState } from "react"
<<<<<<< HEAD
import "./photos.css"
=======
import { useDispatch, useSelector } from "react-redux"
import { createLike, removeLike } from "../../store/like"
import CommentsForm from "../comments/CommentsForm"
>>>>>>> main

export default function PhotoContainer({ photo }) {
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
    console.log('render')
    return (
<<<<<<< HEAD
        <div className="photo-container">
            <img className="photo" src={photo.photo_url} />
            <p className="caption">{photo.caption}</p>
            <button className="like"><img src="/img/heart.png" alt="like"></img></button>
            <form>
                <input className="new-comment"
                    type="text"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                ></input>
            </form>
        </div>
=======
        <>
            <img src={photo.photo_url} />
            <p>{photo.caption}</p>
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
        </>

>>>>>>> main
    )
}
