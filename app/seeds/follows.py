from app.models import db, Follow


def seed_follows():
    demo = Follow(
        user_id=1,
        followers_id=2
    )
    demo2 = Follow(
        user_id=1,
        followers_id=3
    )
    demo3 = Follow(
        user_id=2,
        followers_id=3
    )
    demo4 = Follow(
        user_id=3,
        followers_id=2
    )


# SELECT user_id FROM Followers WHERE followers_id=2
# SELECT followers_id FROM Followers WHERE user_id=2
