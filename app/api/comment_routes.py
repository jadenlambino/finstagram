from flask import Blueprint, request
from flask_login import current_user

#comment model file not created yet
from app.models import db, Comment, Photo
from app.forms import CommentForm
comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/', methods=['POST'])
def post_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    #request.json returns all of the data in the request body
    photo_id = request.json["photo_id"]

    # print('======================PHOTOID', photo_id)
    #form only returns the data in the form
    # print('======================FORM', form.data)

    if form.validate_on_submit():
        new_comment = Comment(
            user_id = current_user.id,
            photo_id = photo_id,
            body = form.body.data
        )
        # print('====================SUBMITTED')
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()

    if form.errors:
        return form.errors, 403

@comment_routes.route('/<int:id>/', methods=["PATCH"])
def patch_comment(id):
    comment = Comment.query.get(id)
    form = CommentForm()
    data = form.data

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment.edit_comment(data['body'])
    
    if form.errors:
        return form.errors, 403

    db.session.commit()

    return comment.to_dict()


@comment_routes.route('/<int:id>/', methods=["DELETE"])
def delete_comment(id):
    comment = Comment.query.get(id)

    db.session.delete(comment)
    db.session.commit()

    return {"Message": "Comment deleted successfully"}
