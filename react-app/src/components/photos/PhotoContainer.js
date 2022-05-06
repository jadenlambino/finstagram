import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { createLike, removeLike } from "../../store/like"
import CommentsForm from "../comments/CommentsForm"

export default function PhotoContainer({ photo }) {
    const dispatch = useDispatch()
    // const user = useSelector(state => state.session.user)
    // const following = useSelector(state => state.session.following)
    const likes = useSelector(state => state.session.likes)
    const like = likes.find(like => like.photo_id === photo.id)

    // let followedUser
    // if (Object.keys(following)) followedUser = following[photo.user_id]
    // console.log('==========FOLLOWEDUSER', followedUser)

    const handleLike = (e) => {
        e.preventDefault()
        if (like) {
            dispatch(removeLike(like.id))
        } else {
            dispatch(createLike(photo.id))
        }
    }

    // console.log("PHOTOCONTAINER")
    return (
        <>
            {/* {followedUser ? (
                <div>
                    <Link to={`/users/${photo.user_id}`}>{followedUser.username}</Link>
                </div>
            )
                : (
                    <div>
                        <Link to={`/users/${photo.user_id}`}>{user.username}</Link>
                    </div>
                )
            } */}
            <div>
                <Link to={`/users/${photo.user_id}`}>{photo.username}</Link>
            </div>
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
