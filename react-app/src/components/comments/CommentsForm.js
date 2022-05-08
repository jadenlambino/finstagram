import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadComment } from '../../store/comments'
import TestPopup from '../popup'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';

const CommentsForm = ({ photo }) => {
    const dispatch = useDispatch()

    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([])
    const [commentError, setCommentError] = useState(false)
    const [open, setOpen] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        clear()

        const body = {
            photoId: photo.id,
            comment
        }

        const res = await dispatch(uploadComment(body))
        if (res.errors) {
            setErrors(res.errors)
            setCommentError(true)
            console.log('hello')
        } else {
            close()
        }
    }

    const clear = () => setComment("")

    const closeModal = () => setCommentError(false)

    const errMsg = (
		errors.map(error => <p>{error}</p>)
	)

    const close = () => setOpen(false)
    
    return (
        <>
            <button open={open} onClick={() => setOpen(open => !open)} id='modal-button-style' className='c-add'>Add Comment</button>
            <Popup open={open} modal closeOnDocumentClick onClose={close} nested>
                <Popup open={commentError} closeOnDocumentClick onClose={closeModal} nested position='top center'>
                    <h1>ERROR!!!!!!!!!</h1>
                    {errMsg}
                </Popup>
                <form className='comments-form'>
                    <div>
                        <label>Add a Comment!</label>
                        <input
                            type='text'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        >
                        </input>
                    </div>
                    <div>
                        <button type='submit' id='modal-button-style' onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </Popup>
        </>
    )
}

export default CommentsForm
