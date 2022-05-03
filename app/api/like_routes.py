from flask import Blueprint, request
from flask_login import current_user

from app.models import db, Like

like_routes = Blueprint('likes', __name__)

@like_routes.route('/', methods=['POST'])
def post_like():
    like_id = request.json

    new_like = Like(
        user_id = current_user.id,
        like_id = like_id
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