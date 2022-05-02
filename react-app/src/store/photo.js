const GET_PHOTOS = 'photo/GET_PHOTOS'

const getPhotos = (photos) => ({
    type: GET_PHOTOS,
    photos
});

const initialState = {}

export const grabPhotos = () => async (dispatch) => {
    const response = await fetch ('/api/photos');
    if (response.ok) {
        const data = await response.json();
        dispatch(getPhotos(data))
        // console.log(getPhotos(data))
    }
}

export default function reducer(state = initialState, action){
    let newState;
    switch (action.type) {
        case GET_PHOTOS:
            newState = {...state}
            action.photos.photos.forEach(photo => newState[photo.id] = photo)
            console.log(action.photos)
            return newState
        default:
            return state;
    }
}
