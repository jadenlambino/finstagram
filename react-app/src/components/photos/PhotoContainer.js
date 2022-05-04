import { useState } from "react"
import CommentsForm from "../comments/CommentsForm"

export default function PhotoContainer({ photo }) {

    const [comment, setComment] = useState('')

    return (
        <>
            <img src={photo.photo_url} />
            <p>{photo.caption}</p>
            <button>Like</button>
            <CommentsForm photo={photo}/>
        </>
    )
}
