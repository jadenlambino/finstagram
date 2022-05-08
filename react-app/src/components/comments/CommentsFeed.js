import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { grabComments } from "../../store/comments";
import { editComment } from "../../store/comments";
import Popup from "reactjs-popup";
import CommentContainer from "./CommentContainer";
import CommentsForm from "./CommentsForm";

const CommentsFeed = ({ photo }) => {
	const dispatch = useDispatch();

	const comments = useSelector(state => Object.values(state.comments))

	useEffect(() => {
		dispatch(grabComments(photo.id))
	}, [dispatch])

	return (
		<div className="comment-container">
			{comments.length > 0 &&
				<>
					<h3 className="comments-title">Comments</h3>
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
			<CommentsForm photo={photo} />
		</div>
	)
}

export default CommentsFeed
