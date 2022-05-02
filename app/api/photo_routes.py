from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Photo

photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/', methods=["GET", "POST", "PATCH", "DELETE"])
# @login_required
def photos():
    #add following photos later
    if current_user.id:
        photos = Photo.query.filter(Photo.user_id == current_user.id).all()
        response = jsonify(photos)
    return(response)
