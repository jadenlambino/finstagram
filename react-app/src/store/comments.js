const GET_COMMENTS = 'comments/GET_COMMENTS'
const POST_COMMENT = 'comments/POST_COMMENT'
const UPDATE_COMMENT = 'comments/UPDATE_COMMENT'
const DELETE_COMMENT = 'comments/DELETE_COMMENT'

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
    id
})

const initialState = {}

export const grabComments = (id) => async (dispatch) => {
    const response = await fetch(`/api/photos/${id}/`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getComments(data))
    }
}

export const uploadComment = (commentData) => async (dispatch) => {
    const {photoId, comment} = commentData
    const response = await fetch('/api/comments/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            photo_id: photoId,
            body: comment
        })
    })

    if (response.ok) {
        const comment = await response.json()
        dispatch(postComment(comment))
        return comment
    }
    else {
        const errors = await response.json()
        // Promise.reject(errors.body)
        console.log(errors)
        return {errors: errors.body}
    }
}

export const editComment = (editedComment) => async (dispatch) => {
    const { id, comment } = editedComment
    const response = await fetch(`/api/comments/${id}/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ body: comment })
    })

    if (response.ok) {
        const comment = await response.json()
        dispatch(updateComment(comment))
        return comment
    } else {
        const errors = await response.json()
        return {errors: errors.body}
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
