const GET_PHOTOS = 'photo/GET_PHOTOS'
const POST_PHOTO = 'photo/POST_PHOTO'
const UPDATE_PHOTO = 'photo/UPDATE_PHOTO'

const getPhotos = (photos) => ({
    type: GET_PHOTOS,
    photos
});

const postPhoto = (photo) => ({
    type: POST_PHOTO,
    photo
})

const updatePhoto = (photo) => ({
    type: UPDATE_PHOTO,
    photo
})

const initialState = {}

export const grabPhotos = () => async (dispatch) => {
    const response = await fetch('/api/photos/');
    if (response.ok) {
        const data = await response.json();
        dispatch(getPhotos(data))
        // console.log(getPhotos(data))
    }
}

export const uploadPhoto = (photoData) => async (dispatch) => {
    const { photoUrl, caption } = photoData
    const response = await fetch('/api/photos/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            photo_url: photoUrl,
            caption
        })
    })

    if (response.ok) {
        const photo = await response.json()
        dispatch(postPhoto(photo))
        return photo
    }
    //add error handing
}

export const editPhoto = (id, caption) => async (dispatch) => {
    const response = await fetch(`/api/photos/${id}/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            caption
        })
    })

    if (response.ok) {
        const photo = await response.json()
        dispatch(updatePhoto(photo))
        return photo
    }
    //add error handing
}

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_PHOTOS:
            newState = { ...state }
            action.photos.photos.forEach(photo => newState[photo.id] = photo)
            // console.log(action.photos)
            return newState
        case POST_PHOTO:
            newState = { ...state }
            newState[action.photo.id] = action.photo
            return newState
        case UPDATE_PHOTO:
            newState = { ...state }
            newState[action.photo.id] = action.photo
            return newState
        default:
            return state;
    }
}
