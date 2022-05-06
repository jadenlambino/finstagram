import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { editPhoto, removePhoto } from "../../../store/photo";
import CommentsFeed from '../../comments/CommentsFeed';
import CommentsForm from "../../comments/CommentsForm";
import { removeLike, createLike } from '../../../store/like';
import './PhotoSRP.css'
import './menu.css'

const PhotoSRP = ({ photo }) => {
  const dispatch = useDispatch()
  const [editClicked, setEditClicked] = useState(false)
  const [caption, setCaption] = useState(photo.caption)
  const [buttons, setButtons] = useState(false)
  const user = useSelector(state => state.session.user)
  const likes = useSelector(state => state.session.likes)
  const like = likes?.find(like => like.photo_id === photo.id)
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

  const handleLike = (e) => {
    e.preventDefault()
    if (like) {
      dispatch(removeLike(like.id))
    } else {
      dispatch(createLike(photo.id))
    }
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

  return (
    <div className="modal-container">
      <img src={photo.photo_url} className='image-container'></img>
      <div className="info-container">
        <div className="photo-info">
          <h3>{photo.caption}</h3>
          <div>
            <Link to={`/users/${photo.user_id}`}>{photo.username}</Link>
          </div>
          {photo.user_id === user.id &&
            <div className="button-menu-container">
              <input type="checkbox" id="menu-toggle" onChange={reveal} />
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
        {like ? (
          <button
            onClick={handleLike}
          >Unlike</button>
        ) : (
          <button
            onClick={handleLike}
          >Like</button>
        )
        }
        <CommentsFeed photo={photo} />
        <CommentsForm photo={photo} />
      </div>
    </div>
  )
}

export default PhotoSRP
