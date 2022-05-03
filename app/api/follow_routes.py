from flask import Blueprint, current_user, request

from app.models import db, Follow

follow_routes = Blueprint('follows', __name__)

@follow_routes.route('/', methods=['POST'])
def post_follow():
    followed_id = request.json

    new_follow = Follow(
        user_id = current_user.id,
        followed_id = followed_id
    )

    db.session.add(new_follow)
    db.session.commit()

    return new_follow.to_dict()

#either get the id of the follow or get the id of the user and id of the person they are
#following, prefer latter so dont have to do get request to find follow id
@follow_routes.route('/<int:id>', methods=['DELETE'])
def delete_follow(id):
    follow = Follow.query.get(id)

    db.session.delete(follow)
    db.session.commit()

    return {'Message': 'Follow deleted successfully'}