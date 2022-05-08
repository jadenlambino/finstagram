import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editComment, removeComment } from "../../store/comments";
import "./Comments.css"

const CommentContainer = ({ comment }) => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)

    const [newComment, setComment] = useState(comment.body)
    const [errors, setErrors] = useState([])

    const handleEdit = async (e) => {
        e.preventDefault();

        const editedComment = {
            id: comment.id,
            comment: newComment
        }

        let res = await dispatch(editComment(editedComment))
        console.log(res)
        if (res.errors) {
            setErrors(res.errors)
            console.log("!!!!!!!!!!!!!!!" + res)
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(removeComment(comment.id))
    }
    // console.log('COMMENTCONTAINER')
    return (
        <>
            {/* <h1>{comment.id}</h1> */}
            <div className="comment">
                <p className="user-name">
                    @{comment.username}
                </p>
                <p className="user-comment">
                    {comment.body}
                </p>
            </div>
            <ul>
                {errors?.map((error, idx) =>
                    <li key={idx}>{error}</li>
                )}
            </ul>
            {user.id === comment.user_id &&
                <>
                    <form>
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setComment(e.target.value)}
                        >
                        </input>
                        <button type="submit" id='modal-button-style' onClick={handleEdit}>Edit</button>
                    </form>
                    <button id='modal-button-style' onClick={handleDelete}>Delete</button>
                </>
            }
        </>
    )
}

export default CommentContainer
