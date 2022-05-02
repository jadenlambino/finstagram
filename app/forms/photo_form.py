from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
# from app.models import Photo

class PhotoForm(FlaskForm):
    photo_url = StringField("Photo Url", validators=[DataRequired()])
    caption = StringField("Caption")
