import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editComment, removeComment } from "../../store/comments";

const CommentContainer = ({ comment }) => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)

    const [newComment, setComment] = useState(comment.body)

    const handleEdit = (e) => {
        e.preventDefault();

        const editedComment = {
            id: comment.id,
            comment: newComment
        }

        dispatch(editComment(editedComment))
    }

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(removeComment(comment.id))
    }
    // console.log('COMMENTCONTAINER')
    return (
        <>
            {/* <h1>{comment.id}</h1> */}
            <p>
                {comment.username}
            </p>
            <p>
                {comment.body}
            </p>
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
