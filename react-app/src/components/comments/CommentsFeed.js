import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { grabComments } from "../../store/comments";
import { editComment } from "../../store/comments";
import CommentContainer from "./CommentContainer";
import CommentsForm from "./CommentsForm";

const CommentsFeed = ({ photo }) => {
	const dispatch = useDispatch();

	// const user = useSelector(state => state.session.user)
	const comments = useSelector(state => Object.values(state.comments))

	// const [comment, setComment] = useState("")

	useEffect(() => {
		dispatch(grabComments(photo.id))
	}, [dispatch])

	// const handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	const body = {
	// 		id: comment.id,
	// 		body: comment
	// 	}

	// 	dispatch(editComment())
	// }

	// console.log("COMMENTSFEED")
	return (
		<div className="comment-container">
			{comments.length > 0 &&
				<>
					<h1>Comments feed</h1>

					<ul className="comments-feed">
						{comments.map(comment => {
							if (comment.photo_id === photo.id) {
								return (
									<li key={comment.id}>
										<CommentContainer comment={comment} />
									</li>
								)
							}
						}
						)}
					</ul>
				</>
			}
			<div className='comments-form'>
				<CommentsForm photo={photo} />
			</div>
		</div>
	)
}

export default CommentsFeed
