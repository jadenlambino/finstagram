from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User
from app.models import Photo

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/photos/')
@login_required
def user_photos(id):
    photos = Photo.query.filter_by(user_id=id)
    return {"photos": [photo.to_dict() for photo in photos]}


@user_routes.route("/<int:id>/follows/")
@login_required
def user_follows(id):
    user = User.query.get(id)
    # print('===========================FOLLOWERS', [user for user in user.followers])
    # print('===========================FOLLOWING', [user for user in user.following])
    # return {'Message': "Follow successful"}
    follow = {
        "followers": [user.to_dict() for user in user.followers],
        "following": [user.to_dict() for user in user.following]
    }
