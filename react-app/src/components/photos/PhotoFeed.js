import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPhoto, grabPhotos } from "../../store/photo";

const PhotoFeed = () => {
	const dispatch = useDispatch();
	// const [editClicked, setEditClicked] = useState(false)
	// const [caption, setCaption] = useState('')
	const user = useSelector(state => state.session.user)
	const photos = useSelector(state => Object.values(state.photos))

	useEffect(() => {
		dispatch(grabPhotos())
	}, [dispatch])

	// const handleEdit = (e => {
	//     e.preventDefault()
	//     setEditClicked(true)
	// })

	// const handleSubmit = (e => {
	//     e.preventDefault()
	//     useparams for id on single resource page
	//     dispatch(editPhoto(id, caption))
	// })

	return (
		<div>
			{photos.length > 0 &&
				<>
					<h1>This is your photo feed</h1>
					<ul>
						{photos.map(photo => (
							<li key={photo.id}>
								<img src={photo.photo_url} />
								<p>{photo.caption}</p>
								{/* <button onClick={handleEdit}>Edit</button> */}
								{/* {editClicked && (
										<form>
												<label>caption</label>
												<input
														type='text'
														value={photo.caption}
														onChange={e => setCaption(e.target.value)}
												></input>
												<button
														type='submit'
														onSubmit={handleSubmit}
												>Submit Changes</button>
										</form>
								)} */}
							</li>
						))}
					</ul>
				</>
			}
		</div>
	)
}

export default PhotoFeed
