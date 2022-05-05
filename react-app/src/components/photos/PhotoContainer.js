import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createLike, removeLike } from "../../store/like"
import CommentsForm from "../comments/CommentsForm"

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
    return (
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

    )
}
