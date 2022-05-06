from flask import Flask
from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    body = TextAreaField('Comment', validators=[DataRequired(message='Please provide a comment')])
