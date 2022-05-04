from flask import Blueprint, request, jsonify
from flask_login import current_user

from app.models import db, Like, User

like_routes = Blueprint('likes', __name__)

@like_routes.route('/')
def get_like():
    user = User.query.get(current_user.id)
    likes = {"likes": [like.to_dict() for like in user.likes]}
    return jsonify(likes)

@like_routes.route('/', methods=['POST'])
def post_like():
    photo_id = request.json['photo_id']

    new_like = Like(
        user_id = current_user.id,
        photo_id = photo_id
    )

    db.session.add(new_like)
    db.session.commit()

    return new_like.to_dict()

@like_routes.route('/<int:id>', methods=["DELETE"])
def delete_like(id):
    like = Like.query.get(id)

    db.session.delete(like)
    db.session.commit()
    
    return {"Message": "Like deleted successfully"}