from app.models import db, Comment


def seed_comments():
    demo = Comment(
        photo_id=1,
        user_id=2,
        body="first!"
    )
    demo2 = Comment(
        photo_id=1,
        user_id=3,
        body="The quick brown fox jumps over the lazy dog"
    )
    demo3 = Comment(
        photo_id=2,
        user_id=1,
        body="Lorem ipsum dolor sit amet"
    )
    demo4 = Comment(
        photo_id=2,
        user_id=1,
        body="Hello World"
    )

    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
