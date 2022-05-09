import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from 'reactjs-popup'
import { editComment, removeComment } from "../../store/comments";
import "./Comments.css"

const CommentContainer = ({ comment }) => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)

    const [newComment, setComment] = useState(comment.body)
    const [buttons, setButtons] = useState(false)
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
        } else {
            reveal()
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(removeComment(comment.id))
    }

    const reveal = (e) => {
        buttons ? setButtons(false) : setButtons(true)
    }

    let commentButtons = (
        <div className="comment-funcs">
            <ul>
                {errors?.map((error, idx) =>
                    <li key={idx}>{error}</li>
                )}
            </ul>
            <form>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setComment(e.target.value)}
                    className='c-input'
                >
                </input>
                <button type="submit" id='modal-button-style' onClick={handleEdit}>Edit</button>
            </form>
            <button id='modal-button-style' onClick={handleDelete}>Delete</button>
        </div>
    )

    return (
        <>
            {/* <h1>{comment.id}</h1> */}
            <div className="single-comment-container">
                <div className="comment">
                    <p className="user-name">
                        @{comment.username}
                    </p>
                    <p className="user-comment">
                        {comment.body}
                    </p>
                </div>
                {user.id === comment.user_id &&
                    <div>
                        <button className='open' onClick={reveal}></button>
                        <Popup open={buttons}>
                            {commentButtons}
                        </Popup>
                    </div>
                }
            </div>
        </>
    )
}

export default CommentContainer
