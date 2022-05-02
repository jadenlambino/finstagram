import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { grabPhotos } from "../../store/photo";

const PhotoFeed = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const photos = useSelector(state => state.photos)

    useEffect(() => {
        dispatch(grabPhotos())
    }, [dispatch])

    let objects = Object.values(photos)
    console.log(objects)
    let entries = Object.entries(objects)
    console.log(entries)

    return (
        <div>
            <h1>This is your photo feed</h1>
            <h2>{entries.caption}</h2>
        </div>
    )
}

export default PhotoFeed
