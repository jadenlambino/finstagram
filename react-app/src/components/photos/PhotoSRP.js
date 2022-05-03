import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editPhoto, removePhoto } from "../../store/photo";

const PhotoSRP = () => {
  const dispatch = useDispatch()
  const [editClicked, setEditClicked] = useState(false)
  const [caption, setCaption] = useState('')
  const user = useSelector(state => state.session.user)
  // const photos = useSelector(state => Object.values(state.photos))
  const id = useParams()

  const handleEdit = (e => {
    e.preventDefault()
    setEditClicked(true)
  })


  const handleSubmit = (e => {

    e.preventDefault()
    // useparams for id on single resource page
    dispatch(editPhoto(id, caption))
  })
  const handleDelete = (e => {
    e.preventDefault()
    dispatch(removePhoto(id))
  })

  return (
    <div>
      <button onClick={handleEdit}>edit</button>
      {editClicked && (
        <form>
          <label>caption</label>
          <input
            type="text"
            value="placeholder"
            onChange={e => setCaption(e.target.value)}>
          </input>
          <button
            type="submit"
            onSubmit={handleSubmit()}>
            Submit Changes
          </button>
        </form>
      )}
      <button>delete</button>
      <img></img>
      <h1>title</h1>
      <p>comments</p>

    </div>
  )
}

export default PhotoSRP
