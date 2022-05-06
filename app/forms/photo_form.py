from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, URL
# from app.models import Photo

class PhotoForm(FlaskForm):
    photo_url = StringField("Photo Url", validators=[DataRequired(message='Please provide a photo url'), URL(message='This must be a valid URL')])
    caption = StringField("Caption")
