from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Photo, photo

photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/', methods=["GET", "POST", "PATCH", "DELETE"])
# @login_required
def photos():
    #add following photos later
    # if current_user.id:
        # photos = Photo.query.filter(Photo.user_id == current_user.id).all()
    # photos = Photo.query.all()
    # return(response)
    photos = Photo.query.all()
    # print (photos[0].caption)
    # print (type(photos[0]))
    response = {'photos': [photo.to_dict() for photo in photos]}
    # return response
    return jsonify(response)
