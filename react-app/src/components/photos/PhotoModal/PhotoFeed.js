import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPhoto, grabPhotos } from "../../store/photo";
import PhotoModal from './PhotoModal';
import CommentsFeed from '../../comments'

import PhotoContainer from './PhotoContainer';

const PhotoFeed = () => {
	const dispatch = useDispatch();

	const user = useSelector(state => state.session.user)
	const photos = useSelector(state => Object.values(state.photos))

	useEffect(() => {
		dispatch(grabPhotos())
	}, [dispatch])

	return (
		<div>
			{photos.length > 0 &&
				<>
					<h1>This is your photo feed</h1>
					<ul>
						{photos.map(photo => (
							<li key={photo.id}>
								<PhotoContainer photo={photo} />
								<PhotoModal  photo={photo}/>
								<CommentsFeed photo={photo}/>
							</li>
						))}
					</ul>
				</>
			}
		</div>
	)
}

export default PhotoFeed
