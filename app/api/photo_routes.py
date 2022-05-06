import itertools
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.forms.photo_form import PhotoForm
from app.models import Photo, db, User
from itertools import chain


photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/')
# @login_required
def photos():
    user = User.query.get(current_user.id)
    following = [user for user in user.following]
    following_photos_list =[user.photos for user in following]
    following_photos = list(itertools.chain.from_iterable(following_photos_list))
    photos = user.photos + following_photos

    response = {"photos": [photo.to_dict() for photo in photos]}
    return jsonify(response)

# refactor route to grab all comments and on frontend use logic
# to render the comments per photo
@photo_routes.route('/<int:id>/')
def get_comments(id):
    photo = Photo.query.get(id)
    comments = {"comments": [comment.to_dict() for comment in photo.comments]}
    return jsonify(comments)

@photo_routes.route('/', methods=["POST"])
def post_photo():

    form = PhotoForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_photo = Photo(
            user_id = current_user.id,
            photo_url = data["photo_url"],
            caption = data["caption"]
        )
        db.session.add(new_photo)
        db.session.commit()
        return new_photo.to_dict()

    if form.errors:
        return form.errors, 403

@photo_routes.route('/<int:id>/', methods=["PATCH"])
def patch_photo(id):
    photo = Photo.query.get(id)
    form = PhotoForm()
    data = form.data
    photo.edit_caption(data['caption'])

    db.session.commit()

    return photo.to_dict()


@photo_routes.route('/<int:id>/', methods=["DELETE"])
def delete_photo(id):
    photo = Photo.query.get(id)

    db.session.delete(photo)
    db.session.commit()

    return {"Message": "Photo deleted successfully"}
