import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { grabFollows, removeFollow, followUser } from "../../store/follows"

export default function FollowsContainer({ profileUser }) {
  const dispatch = useDispatch();
  // const profileUser = useSelector(state => state.)
  const user = useSelector(state => state.session.user)
  const followers = useSelector(state => state.session.followers)
  const following = useSelector(state => state.session.following)
  console.log("profileUser", profileUser)
  console.log("!!!!!!")
  console.log("session user", user)

  const handleFollow = (e) => {
    dispatch(grabFollows(profileUser.id))
    // if (follow) {
    //   dispatch(removeFollow(user.id))
    // } else {
    //   dispatch(followUser(user.id))
    // }
  }

  return (<h1>{profileUser.username} follows </h1>)
}
