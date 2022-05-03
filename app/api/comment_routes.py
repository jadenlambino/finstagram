from flask import Blueprint, current_user, request

#comment model file not created yet
from app.models import db, Comment
from app.forms import CommentForm
comment_routes = Blueprint('comments', __name__)

#no need for get route bc comments are linked to posts and there's no need to look at comments
#not associated with a post

@comment_routes.route('/', methods=['POST'])
def post_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    photo_id = request.json

    if form.validate_on_submit():
        new_comment = Comment(
            user_id = current_user.id,
            photo_id = photo_id,
            body = form.body.data 
        )
        
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()

@comment_routes.route('/<int:id>', methods=["PATCH"])
def patch_comment(id):
    comment = Comment.query.get(id)
    form = CommentForm()
    data = form.data
    comment.edit_caption(data['body'])
    
    db.session.commit()

    return comment.to_dict()


@comment_routes.route('/<int:id>', methods=["DELETE"])
def delete_comment(id):
    comment = Comment.query.get(id)

    db.session.delete(comment)
    db.session.commit()
    
    return {"Message": "Comment deleted successfully"}