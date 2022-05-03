import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editPhoto, removePhoto } from "../../../store/photo";

const PhotoSRP = ({ photo }) => {
  const dispatch = useDispatch()
  const [editClicked, setEditClicked] = useState(false)
  const [caption, setCaption] = useState(photo.caption)
  const user = useSelector(state => state.session.user)
  const history = useHistory()

  const handleEdit = (e) => {
    e.preventDefault()
    setEditClicked(!editClicked)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(editPhoto(photo.id, caption))
  }

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(removePhoto(photo.id))
    history.push('/photos')
  }

  return (
    <div>
      {photo.user_id === user.id &&
        <div>
          <button onClick={handleEdit}>edit</button>
          {editClicked && (
            <form>
              <label>caption</label>
              <input
                type="text"
                value={caption}
                onChange={e => setCaption(e.target.value)}>
              </input>
              <button
                type="submit"
                onSubmit={handleSubmit}>
                Submit Changes
              </button>
              {/* <h1>{photo.id}</h1> */}
            </form>
          )}
          <button onClick={handleDelete}>delete</button>
        </div>
      }
      <img src={photo.photo_url}></img>
      <h1>{photo.caption}</h1>
      <p>comments</p>
    </div>
  )
}

export default PhotoSRP
