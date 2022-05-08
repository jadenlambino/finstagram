import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPhoto, grabPhotos } from "../../store/photo";
import PhotoModal from './PhotoModal';
import CommentsFeed from '../comments/CommentsFeed'
import PhotoForm from "./PhotoForm";
import Popup from "reactjs-popup";
import "./PhotoFeed.css"
import About from "../About";

const PhotoFeed = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.session.user)
	const photos = useSelector(state => Object.values(state.photos))
	const [open, setOpen] = useState(false)

	useEffect(() => {
		dispatch(grabPhotos())
	}, [dispatch])

	return (
		<>
			<div className="photo-feed">
				{photos.length > 0 &&
					<>
						<h1>This is your photo feed</h1>
						<PhotoForm />
						<div className="feed-container">
							<ul className="p-ul">
								{photos.map(photo => (
									<li className="photo-li" key={photo.id}>
										<div className="post-container">
											<PhotoModal photo={photo} />
											<CommentsFeed photo={photo} />
										</div>
									</li>
								))}
							</ul>
						</div>
					</>
				}
			</div>
		</>
	)
}

export default PhotoFeed
