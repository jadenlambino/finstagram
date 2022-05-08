import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link, useParams } from "react-router-dom";
import { editPhoto, removePhoto } from "../../../store/photo";
import CommentsFeed from '../../comments/CommentsFeed';
import CommentsForm from "../../comments/CommentsForm";
import { removeLike, createLike } from '../../../store/like';
import './PhotoSRP.css'
import './menu.css'
import Popup from "reactjs-popup";

const PhotoSRP = ({ photo }) => {
  const dispatch = useDispatch()
  const [editClicked, setEditClicked] = useState(false)
  const [caption, setCaption] = useState(photo.caption)
  const [buttons, setButtons] = useState(false)
  const user = useSelector(state => state.session.user)
  const likes = useSelector(state => state.session.likes)
  const like = likes?.find(like => like.photo_id === photo.id)
  const history = useHistory()
  const { userId } = useParams()

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
          <button className='modal-button-style' id='modal-button-style' onClick={handleEdit}>Edit</button>
          {editClicked && (
            <form onSubmit={handleSubmit}>
              <label>Caption</label>
              <input
                type="text"
                value={caption}
                onChange={e => setCaption(e.target.value)}>
              </input>
              <button className='modal-button-style'
                type="submit"
                id='modal-button-style'
                >
                Submit Changes
              </button>
            </form>
          )}
          <button className='modal-button-style' id='modal-button-style' onClick={handleDelete}>Delete</button>
        </div>
  )

  const reveal = (e) => {
    buttons ? setButtons(false) : setButtons(true)
  }

  return (
    <div>
      {/* <h1>PHOTOSRP</h1> */}
      <div className="modal-container">
        <img src={photo.photo_url} className='image-container'></img>
        <div className="info-container">
          <div className="c-cont">
            <div className="photo-info">
              <h3>{photo.caption}</h3>
              {!user.id && (
                <div>
                  <Link to={`/users/${photo.user_id}`}>{user.username}</Link>
                </div>
              )
            }
            {photo.user_id === user.id &&
              <div className="button-menu-container">
                <input type="checkbox" id="menu-toggle" onClick={reveal} />
                <label htmlFor='menu-toggle' className="hamburger">
                  <span className="bun bun-top">
                    <span className="bun-crust bun-crust-top"></span>
                  </span>
                  <span className="bun bun-bottom">
                    <span className="bun-crust bun-crust-bottom"></span>
                  </span>
                </label>
                <Popup open={buttons} closeOnDocumentClick>
                  {functionButtons}
                </Popup>
              </div>
            }
            </div>
          {like ? (
                <button id='like-dislike'
                    onClick={handleLike}
                >❤️</button>
            ) : (
                <button id='like-dislike'
                    onClick={handleLike}
                >🤍</button>
            )
          }
          </div>
        <CommentsFeed photo={photo} />
      </div>
    </div>
    </div>
  )
}

export default PhotoSRP
