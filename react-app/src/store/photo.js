const GET_PHOTO = 'photo/GET_PHOTO'

const getPhoto = (photo) => ({
    type: GET_PHOTO,
    payload: photo
});

const initialState = { photo: null}

export const grabPhotos = () => async (dispatch) => {
    const response = await fetch ('/api/photos', {
        headers: {
            "Content-Type": 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(getPhoto(data))
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_PHOTO:
            return { photo: action.payload}

        default:
            return state;
    }
}
