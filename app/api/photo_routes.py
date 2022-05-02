from crypt import methods
from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.forms.photo_form import PhotoForm
from app.models import User, Photo, photo

photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/', methods=["GET", "POST", "PATCH", "DELETE"])
# @login_required
def photos():
    #add following photos later
    photos = Photo.query.all()
    response = {"photos": [photo.to_dict() for photo in photos]}
    return jsonify(response)

@photo_routes.route('/', methods=["POST"])
def post_photo():
    form = PhotoForm()
    if form.validate_on_submit():
        data = form.data
        new_photo = Photo (
            user_id = data["user_id"]
            photo_url = data["photo_url"]
            caption = data["caption"]
        )
