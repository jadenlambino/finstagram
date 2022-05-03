from .db import db


class Follower(db.Model):
    __tablename__ = 'followers'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    followers_id = db.Column(
        db.String, db.ForeignKey("users.id"), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "followers_id": self.followers_id,
        }

    user = db.relationship("User", back_populates="followers")
    followers = db.relationship("User", back_populates="followers")
