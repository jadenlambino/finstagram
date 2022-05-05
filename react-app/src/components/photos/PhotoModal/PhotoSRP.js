import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editPhoto, removePhoto } from "../../../store/photo";
import CommentsFeed from '../../comments/CommentsFeed';
import CommentsForm from "../../comments/CommentsForm";
import MenuAnimation from "./menu";
import './PhotoSRP.css'

const PhotoSRP = ({ photo }) => {
  const dispatch = useDispatch()
  const [editClicked, setEditClicked] = useState(false)
  const [caption, setCaption] = useState(photo.caption)
  const [buttons, setButtons] = useState(false)
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

  let functionButtons = (
    <div className="button-container">
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
  )

  const reveal = (e) => {
    buttons ? setButtons(false) : setButtons(true)
  }
  // console.log('render')
  return (
    <div className="modal-container">
      <img src={photo.photo_url} className='image-container'></img>
      <div className="info-container">
        <div className="photo-info">
          <h3>{photo.caption}</h3>
          {photo.user_id === user.id &&
            <div className="button-menu-container">
              <input type="checkbox" id="menu-toggle" onChange={reveal}/>
              <label htmlFor='menu-toggle' className="hamburger">
                  <span className="bun bun-top">
                      <span className="bun-crust bun-crust-top"></span>
                  </span>
                  <span className="bun bun-bottom">
                      <span className="bun-crust bun-crust-bottom"></span>
                  </span>
              </label>
              {buttons && functionButtons}
            </div>
          }
        </div>
        <CommentsFeed photo={photo}/>
        <CommentsForm photo={photo} />
      </div>
    </div>
  )
}

export default PhotoSRP
