import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { grabPhotos } from "../../store/photo";

const PhotoFeed = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const photos = useSelector(state => state.photo.photos)

    useEffect(() => {
        dispatch(grabPhotos())
    }, [dispatch])

    return (
        <h1>This is your photo feed</h1>
    )
}

export default PhotoFeed
