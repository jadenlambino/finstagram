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
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
