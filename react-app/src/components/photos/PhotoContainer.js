export default function PhotoContainer({ photo }) {
    return (
        <>
            <img src={photo.photo_url} />
            <p>{photo.caption}</p>
            {/* add like button */}
        </>
    )
}