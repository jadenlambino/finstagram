import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { grabComments } from "../../store/comments";

const CommentsFeed = ({photo}) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)
	const comments = useSelector(state => Object.values(state.comments))

	useEffect(() => {
		dispatch(grabComments(photo.id))
	}, [dispatch])

	return (
		<div>
            <h1>Hello Components</h1>
			{comments.length > 0 &&
				<>
					<h1>Comments feed</h1>
					<ul>
						{comments.map(comment => (
							<h1>{comment.id}</h1>
							{comment.photo_id === photo.id &&
                                <li key={comment.id}>
                                	{comment.body}
                                </li>
							}
						))}
					</ul>
				</>
			}
		</div>
	)
}

export default CommentsFeed
