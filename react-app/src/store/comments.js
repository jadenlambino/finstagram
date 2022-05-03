const GET_COMMENTS = 'photo/GET_COMMENTS'
const POST_COMMENT = 'photo/POST_COMMENT'
const UPDATE_COMMENT = 'photo/UPDATE_COMMENT'
const DELETE_COMMENT = 'photo/DELETE_COMMENT'

const getComments = (comments) => ({
    type: GET_COMMENTS,
    comments
})

const postComment = (comment) => ({
    type: POST_COMMENT,
    comment
})

const updateComment = (comment) => ({
    type: UPDATE_COMMENT,
    comment
})

const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    comment
})

const initialState = {}

export const grabComments = () => async (dispatch) => {
    const response = await fetch('/api/comments/');
    if (response.ok) {
        const data = await response.json();
        dispatch(getComments(data))
    }
}

export const uploadComment = () => async (dispatch) => {
    const response = await fetch('/api/comments/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            photo_id: photoId,
            user_id: userId
            body
        })
    })

    if (response.ok) {
        const comment = await response.json()
        dispatch(postComment(comment))
        return comment
    }
    //add error handing
}

export const editComment = (id, body) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ body })
    })

    if (response.ok) {
        const comment = await response.json()
        dispatch(updateComment(comment))
        return comment
    }
    //add error handing
}

export const removeComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}/`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deleteComment(id))
    }
}

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_COMMENTS:
            newState = { ...state }
            action.comments.comments.forEach(comment => newState[comment.id] = comment)
            return newState
        case POST_COMMENT:
            newState = { ...state }
            newState[action.comment.id] = action.comment
            return newState
        case UPDATE_COMMENT:
            newState = { ...state }
            newState[action.comment.id] = action.comment
            return newState
        case DELETE_COMMENT:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}
