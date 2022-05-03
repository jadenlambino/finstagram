import { useState } from "react"

export default function PhotoContainer({ photo }) {

    const [comment, setComment] = useState('')

    return (
        <>
            <img src={photo.photo_url} />
            <p>{photo.caption}</p>
            <button>Like</button>
            <form>
                <input
                    type="text"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                ></input>
            </form>
        </>
    )
}
