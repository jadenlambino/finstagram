export const GET_FOLLOWS = 'follows/GET_FOLLOWS'
export const POST_FOLLOW = 'follows/ADD_FOLLOW'
export const DELETE_FOLLOW = 'follows/DELETE_FOLLOW'
export const GET_USER_FOLLOWS = 'follows/GET_USER_FOLLOWS'

const getFollows = (users) => ({
    type: GET_FOLLOWS,
    users
})

const postFollow = (users) => ({
    type: POST_FOLLOW,
    users
})

const getUserFollows = (users) => ({
    type: GET_USER_FOLLOWS,
    users
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
