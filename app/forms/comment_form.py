from xml.dom import ValidationErr
from flask import Flask
from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired, ValidationError

# def validate_comment(field):
#     if len(field.data) == 0:
#         raise ValidationError('Please Input a Comment')


class CommentForm(FlaskForm):
    body = TextAreaField('Comment', validators=[DataRequired()])
