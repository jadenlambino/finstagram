export const GET_FOLLOWS = 'follows/GET_FOLLOWS'
export const POST_FOLLOW = 'follows/ADD_FOLLOW'
export const DELETE_FOLLOW = 'follows/DELETE_FOLLOW'
export const GET_USER_FOLLOWS = 'follows/GET_USER_FOLLOWS'

const getFollows = (follows) => ({
    type: GET_FOLLOWS,
    follows
})

const postFollow = (follows) => ({
    type: POST_FOLLOW,
    follows
})

const getUserFollows = (follows) => ({
    type: GET_USER_FOLLOWS,
    follows
})

const deleteFollow = (id) => ({
    type: DELETE_FOLLOW,
    id
})

const initialState = {}

export const grabFollows = (id) => async (dispatch) => {
    const response = await fetch('/api/follows/');
    if (response.ok) {
        const data = await response.json();
        dispatch(getFollows(data))
    }
}
export const grabUserFollows = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/follows/`)
    if (response.ok) {
        const data = await response.json();
        dispatch(getUserFollows(data))
    }
}

export const followUser = (userId) => async (dispatch) => {
    const response = await fetch('/api/follows/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: userId,
        })
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(postFollow(data))
    }
}

export const removeFollow = (id) => async (dispatch) => {
    const response = await fetch(`/api/follows/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: id
        })
    })
    if (response.ok) {
        dispatch(deleteFollow(id))
    }
}

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_FOLLOWS:
            newState = { ...state }
            action.follows.follows.forEach(follow => newState[follow.id] = follow)
            // console.log(action.follows)
            return newState
        case GET_USER_FOLLOWS:
            newState = {}
            action.follows.follows.forEach(follow => newState[follow.id] = follow)
            return newState
        case POST_FOLLOW:
            newState = { ...state }
            newState[action.follow.id] = action.follow
            return newState
        // case UPDATE_FOLLOW:
        //     newState = { ...state }
        //     newState[action.follow.id] = action.follow
        //     return newState
        case DELETE_FOLLOW:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}
