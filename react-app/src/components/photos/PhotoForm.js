import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPhoto } from "../../store/photo";
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';

const PhotoForm = () => {
	const dispatch = useDispatch()

	const [photoUrl, setPhotoUrl] = useState('')
	const [caption, setCaption] = useState('')
	const [errors, setErrors] = useState([])
	const [openPhotoError, setPhotoError] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newPhoto = {
			photoUrl,
			caption
		}

		const response = await dispatch(uploadPhoto(newPhoto))
		if (response.errors) {
			setErrors(response.errors)
			setPhotoError(true)
			console.log(response.errors)
		} else {
			closeModal()
		}
	}

	const closeModal = () => setPhotoError(false)

	const deeznuts = (
		errors.map(error => <p>{error}</p>)
	)

	return (
		<Popup trigger={<button className="button" id='modal-button-style'>Add Photo</button>} modal nested>
			<Popup open={openPhotoError} closeOnDocumentClick onClose={closeModal} nested position="top center">
				{/* <a className="close" onClick={closeModal}>close</a> */}
				<h1>ERROR!!!!!!!!!</h1>
                {deeznuts}
        	</Popup>
			<h1>Add a Photo!</h1>
			<form className="p-form">
				<div>
					<label>Photo Url</label>
					<input
						type="text"
						value={photoUrl}
						onChange={(e) => setPhotoUrl(e.target.value)}
					></input>
				</div>
				<div>
					<label>Caption</label>
					<input
						type="text"
						value={caption}
						onChange={(e) => setCaption(e.target.value)}
					>
					</input>
				</div>
				<div>
					<button type="submit" className='button-style' onClick={handleSubmit}>Submit</button>
				</div>
			</form>
		</Popup>
	)
}

export default PhotoForm
