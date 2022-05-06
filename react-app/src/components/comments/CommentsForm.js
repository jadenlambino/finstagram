import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadComment } from '../../store/comments'

const CommentsForm = ({ photo }) => {
    const dispatch = useDispatch()

    // const user = useSelector(state => state.session.user)

    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const body = {
            photoId: photo.id,
            comment
        }

        dispatch(uploadComment(body))
    }
    // console.log('COMMENTSFORM')
    return (
        <div>
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
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CommentsForm
