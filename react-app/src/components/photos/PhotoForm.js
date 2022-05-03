import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPhoto } from "../../store/photo";

const PhotoForm = () => {
	const dispatch = useDispatch()

	const [photoUrl, setPhotoUrl] = useState('')
	const [caption, setCaption] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newPhoto = {
			photoUrl,
			caption
		}

		const response = await dispatch(uploadPhoto(newPhoto))
	}

	return (
		<div>
			<form>
				<div>
					<label>Photo Url</label>
					<input
						type="text"
						value={photoUrl}
						onChange={(e) => setPhotoUrl(e.target.value)}
					></input>
				</div>
				<div>
					<label>caption</label>
					<input
						type="text"
						value={caption}
						onChange={(e) => setCaption(e.target.value)}
					>
					</input>
				</div>
				<div>
					<button type="submit" onClick={handleSubmit}>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default PhotoForm
