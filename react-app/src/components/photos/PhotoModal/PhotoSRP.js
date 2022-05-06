import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editPhoto, removePhoto } from "../../../store/photo";
import CommentsFeed from '../../comments/CommentsFeed';

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
    console.log('edit')
    await dispatch(editPhoto(photo.id, caption))
    setEditClicked(false)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(removePhoto(photo.id))
    history.push('/photos')
  }
  // console.log('render')
  return (
    <div>
      {photo.user_id === user.id &&
        <div>
          <button onClick={handleEdit}>edit</button>
          {editClicked && (
            <form onSubmit={handleSubmit}>
              <label>caption</label>
              <input
                type="text"
                value={caption}
                onChange={e => setCaption(e.target.value)}>
              </input>
              <button
                type="submit"
              >
                Submit Changes
              </button>
            </form>
          )}
          <button onClick={handleDelete}>delete</button>
        </div>
      }
      <img src={photo.photo_url}></img>
      <h1>{photo.caption}</h1>
      <CommentsFeed photo={photo}/>
    </div>
  )
}

export default PhotoSRP
