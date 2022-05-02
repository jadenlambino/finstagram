import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { grabPhotos } from "../../store/photo";

const PhotoFeed = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const photos = useSelector(state => Object.values(state.photos))

    useEffect(() => {
        dispatch(grabPhotos())
    }, [dispatch])

    return (
        <div>
            {photos.length > 0 &&
                <>
                    <h1>This is your photo feed</h1>
                    <ul>
                        {photos.map(photo => (
                            <li key={photo.id}>
                                <img src={photo.photo_url} />
                            </li>
                        ))}
                    </ul>
                </>
            }
        </div>
    )
}

export default PhotoFeed
