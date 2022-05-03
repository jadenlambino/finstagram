from .db import db


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    photo_id = db.Column(db.String, db.ForeignKey("photos.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "photo_id": self.photo_id,
            "user_id": self.user_id,
        }
        # TODO do we need any "edit like method?"

    user = db.relationship("User", back_populates="likes")
    photo = db.relationship("Photo", back_populates="likes")
