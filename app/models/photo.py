from .db import db

class Photo(db.Models):
    __tablename__ = 'photos'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    photo_url = db.Column(db.String, nullable=False)
    caption = db.Column(db.String)

    user = db.relationship("User", back_populates="photos")
