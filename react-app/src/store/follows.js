const GET_FOLLOWS = 'follows/GET_FOLLOWS'
const POST_FOLLOW = 'follows/ADD_FOLLOW'
const DELETE_FOLLOW = 'follows/DELETE_FOLLOW'

const getFollows = (user) => ({
    type: GET_FOLLOWS,
    user
});

const postFollow = (user) => ({
    type: POST_FOLLOW,
    user
})

const deleteFollow = (id) => ({
    type: DELETE_FOLLOW,
    id
})

const initialState = {}

export const grabFollows = () => async (dispatch) => {
    const response = await fetch('/api/follows/');
    if (response.ok) {
        const data = await response.json();
        dispatch(getFollows(data))
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
    const response = await fetch(`/api/follows/${id}`, {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(deleteFollow(id))
    }
}