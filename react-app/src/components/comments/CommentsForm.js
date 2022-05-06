import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadComment } from '../../store/comments'

const CommentsForm = ({ photo }) => {
    const dispatch = useDispatch()

    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const body = {
            photoId: photo.id,
            comment
        }

        const res = await dispatch(uploadComment(body))
        if (res.errors) {
            setErrors(res.errors)
            console.log('hello')
        }
    }
    return (
        <div>
            <ul>
                {errors.map((error, idx) =>
                    <li key={idx}>{error}</li>
                )}
            </ul>
            <form>
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
        </div>
    )
}

export default CommentsForm
