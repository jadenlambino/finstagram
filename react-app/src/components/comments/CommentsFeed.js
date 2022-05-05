import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { grabComments } from "../../store/comments";
import { editComment } from "../../store/comments";
import CommentContainer from "./CommentContainer";

const CommentsFeed = ({photo}) => {
    const dispatch = useDispatch();

    // const user = useSelector(state => state.session.user)
	const comments = useSelector(state => Object.values(state.comments))

	// const [comment, setComment] = useState("")

	useEffect(() => {
		dispatch(grabComments(photo.id))
	}, [dispatch])

	return (
		<div>
			{comments.length > 0 &&
				<>
					<ul>
						{comments.map(comment =>
							{if (comment.photo_id === photo.id) {
								return (
									<CommentContainer comment={comment}/>
								)
							}}
						)}
					</ul>
				</>
			}
		</div>
	)
}

export default CommentsFeed
