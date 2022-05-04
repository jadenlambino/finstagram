import { useState } from "react"
import "./photos.css"

export default function PhotoContainer({ photo }) {

    const [comment, setComment] = useState('')

    return (
        <div className="photo-container">
            <img className="photo" src={photo.photo_url} />
            <p className="caption">{photo.caption}</p>
            <button className="like"><img src="/img/heart.png" alt="like"></img></button>
            <form>
                <input className="new-comment"
                    type="text"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                ></input>
            </form>
        </div>
    )
}
