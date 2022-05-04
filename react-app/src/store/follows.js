const GET_FOLLOWS = 'follows/GET_FOLLOWS'
const POST_FOLLOW = 'follows/ADD_FOLLOW'
const DELETE_FOLLOW = 'follows/DELETE_FOLLOW'

const getFollows = (follows) => ({
    type: GET_FOLLOWS,
    follows
});

const postFollow = (follow) => ({
    type: POST_FOLLOW,
    follow
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
            followed_id: followId,
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
