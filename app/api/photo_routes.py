from flask import Blueprint, jsonify, g
from flask_login import login_required, current_user
from app.forms.photo_form import PhotoForm
from app.models import Photo, db

photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/', methods=["GET", "POST", "PATCH", "DELETE"])
# @login_required
def photos():
    #add following photos later
    photos = Photo.query.all()
    response = {"photos": [photo.to_dict() for photo in photos]}
    return jsonify(response)

@photo_routes.route('/new', methods=["POST"])
def post_photo():
    # if current_user.is_authenticated():
    #     g.user = current_user.get_id()

    # print('====================================', g.user)

    form = PhotoForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_photo = Photo (
            user_id = current_user.id,
            photo_url = data["photo_url"],
            caption = data["caption"]
        )

    db.session.add(new_photo)
    db.session.commit()