export const LOAD_LIKES = 'likes/LOAD_LIKES'
export const POST_LIKE = 'likes/POST_LIKE'
export const DELETE_LIKE = 'likes/DELETE_LIKE'

const loadLikes = (likes) => ({
    type: LOAD_LIKES,
    likes
})

const postLike = (like) => ({
    type: POST_LIKE,
    like
})

const deleteLike = (id) => ({
    type: DELETE_LIKE,
    id
})

export const grabLikes = () => async (dispatch) => {
    const response = await fetch('/api/likes/');
    if (response.ok) {
        const data = await response.json();
        dispatch(loadLikes(data))
    }
}

export const createLike = (photoId) => async (dispatch) => {
    const response = await fetch('/api/likes/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            photo_id: photoId,
        })
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(postLike(data))
    }
}

export const removeLike = (id) => async (dispatch) => {
    const response = await fetch(`/api/likes/${id}`, {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(deleteLike(id))
    }
}