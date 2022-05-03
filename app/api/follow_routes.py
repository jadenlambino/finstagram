from flask import Blueprint, request, jsonify
from flask_login import current_user

from app.models import db, User

follow_routes = Blueprint('follows', __name__)

@follow_routes.route('/')
def get_follow():
    user = User.query.get(2)
    # print('===========================FOLLOWERS', [user for user in user.followers])
    # print('===========================FOLLOWING', [user for user in user.following])
    # return {'Message': "Follow successful"}
    follow = {
        "followers": [user.username for user in user.followers],
        "following": [user.username for user in user.following]
    }
    
    return jsonify(follow)

@follow_routes.route('/', methods=['POST'])
def post_follow():
    user_to_fol_id = request.json
    user_to_fol = User.query.get(user_to_fol_id)
    user = User.query.get(current_user.id)

    user.following.append(user_to_fol)

    db.session.commit()

    return {'Message': "Follow successful"}

#either get the id of the follow or get the id of the user and id of the person they are
#following, prefer latter so dont have to do get request to find follow id
@follow_routes.route('/', methods=['DELETE'])
def delete_follow():
    user_followed_id = request.json
    user_followed = User.query.get(user_followed_id)
    user = User.query.get(current_user.id)

    user.following.pop(user_followed)
    db.session.commit()

    return {'Message': 'Follow deleted successfully'}