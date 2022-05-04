import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editComment } from "../../store/comments";

const CommentContainer = ({ comment }) => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)

    const [newComment, setComment] = useState(comment.body)

    const handleSubmit = (e) => {
        e.preventDefault();

        const editedComment = {
            id: comment.id,
            comment: newComment
        }

        dispatch(editComment(editedComment))
    }

    return (
        <>
            {/* <h1>{comment.id}</h1> */}
            <li key={comment.id}>
                {comment.body}
                {user.id === comment.user_id &&
                    <form>
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setComment(e.target.value)}
                        >
                        </input>
                        <button type="submit" onClick={handleSubmit}>edit</button>
                    </form>
                }
            </li>
        </>
    )
}

export default CommentContainer
