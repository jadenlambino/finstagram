from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.forms.photo_form import PhotoForm
from app.models import Photo, db

photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/')
# @login_required
def photos():
    #add following photos later
    photos = Photo.query.all()
    response = {"photos": [photo.to_dict() for photo in photos]}
    return jsonify(response)

@photo_routes.route('/<int:id>')
def get_comments(id):
    photo = Photo.query.get(id)
    comments = {"comments": [comment.to_dict() for comment in photo.comments]}
    return jsonify(comments)

@photo_routes.route('/', methods=["POST"])
def post_photo():
    # if current_user.is_authenticated():
    #     g.user = current_user.get_id()

    # print('====================================', g.user)

    form = PhotoForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print('=====================', form.data)
    if form.validate_on_submit():
        data = form.data
        new_photo = Photo(
            user_id = current_user.id,
            photo_url = data["photo_url"],
            caption = data["caption"]
        )
        # print('=====================SUBMITTED', )
        db.session.add(new_photo)
        db.session.commit()
        return new_photo.to_dict()
    #return {'Message': 'works'}

@photo_routes.route('/<int:id>/', methods=["PATCH"])
def patch_photo(id):
    photo = Photo.query.get(id)
    #print('==========PHOTO', photo)
    form = PhotoForm()
    data = form.data
    photo.edit_caption(data['caption'])
    
    db.session.commit()

    return photo.to_dict()


@photo_routes.route('/<int:id>', methods=["DELETE"])
def delete_photo(id):
    photo = Photo.query.get(id)

    db.session.delete(photo)
    db.session.commit()
    
    return {"Message": "Photo deleted successfully"}