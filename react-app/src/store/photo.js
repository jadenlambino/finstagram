//import used for creating a likes obj within photos
// import { LOAD_LIKES, POST_LIKE, DELETE_LIKE } from "./like";
import { CLEAR_STORE } from "./users";

const GET_PHOTOS = 'photo/GET_PHOTOS'
const GET_USER_PHOTOS = 'photo/GET_USER_PHOTOS'
const POST_PHOTO = 'photo/POST_PHOTO'
const UPDATE_PHOTO = 'photo/UPDATE_PHOTO'
const DELETE_PHOTO = 'photo/DELETE_PHOTO'

const getPhotos = (photos) => ({
    type: GET_PHOTOS,
    photos
});

const getUserPhotos = (photos) => ({
    type: GET_USER_PHOTOS,
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

const deletePhoto = (id) => ({
    type: DELETE_PHOTO,
    id
})

export const grabPhotos = () => async (dispatch) => {
    const response = await fetch('/api/photos/');
    if (response.ok) {
        const data = await response.json();
        dispatch(getPhotos(data))
        // console.log(getPhotos(data))
    }
}

export const grabUserPhotos = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/photos/`)
    if (response.ok) {
        const data = await response.json();
        dispatch(getUserPhotos(data))
    }
} //where does this go?!?!?

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
    } else {
        const errors = await response.json()
        console.log(errors)
        return {errors: errors.photo_url}
    }
    //add error handing
}

export const editPhoto = (id, caption) => async (dispatch) => {
    console.log('EDIT THUNK FUNCTION')
    const response = await fetch(`/api/photos/${id}/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ caption })
    })

    if (response.ok) {
        const photo = await response.json()
        dispatch(updatePhoto(photo))
        return photo
    }
    //add error handing
}

export const removePhoto = (id) => async (dispatch) => {
    const response = await fetch(`/api/photos/${id}/`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deletePhoto(id))
    }
}

const initialState = {}

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_PHOTOS:
            newState = {}
            action.photos.photos.forEach(photo => { newState[photo.id] = photo })
            return newState
        case GET_USER_PHOTOS:
            newState = {}
            action.photos.photos.forEach(photo => newState[photo.id] = photo)
            return newState
        case POST_PHOTO:
            newState = { ...state }
            newState[action.photo.id] = action.photo
            return newState
        case UPDATE_PHOTO:
            newState = { ...state }
            newState[action.photo.id] = action.photo
            return newState
        case DELETE_PHOTO:
            newState = { ...state }
            delete newState[action.id]
            return newState
        // case LOAD_LIKES:
        // newState = { ...state }
        // const likesObj = {}
        // action.likes.likes.forEach(like => {
        //     likesObj[like.photo_id] =
        // })
        // likesArr.forEach(like => {
        //     newState[like.photo_id]["likes"].push(like)
        // })
        // return newState
        case CLEAR_STORE:
            return initialState
        default:
            return state;
    }
}
