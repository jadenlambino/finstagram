from .db import db


follows = db.Table(
    'follows',
    followed_id=db.Column(db.Integer, db.ForeignKey("users.id")),
    followers_id=db.Column(
        db.Integer, db.ForeignKey("users.id"))
)
