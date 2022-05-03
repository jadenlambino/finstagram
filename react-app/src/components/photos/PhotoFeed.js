import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPhoto, grabPhotos } from "../../store/photo";

import PhotoContainer from './PhotoContainer';

const PhotoFeed = () => {
<<<<<<< HEAD
	const dispatch = useDispatch();
	// const [editClicked, setEditClicked] = useState(false)
	// const [caption, setCaption] = useState('')
	const user = useSelector(state => state.session.user)
	const photos = useSelector(state => Object.values(state.photos))
=======
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)
    const photos = useSelector(state => Object.values(state.photos))
>>>>>>> refs/remotes/origin/first_crud

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
							</li>
						))}
					</ul>
				</>
			}
		</div>
	)
}

export default PhotoFeed
