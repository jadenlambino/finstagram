from app.models import db, Photo

def seed_photos():
    demo = Photo(
        user_id = 1,
        photo_url = "https://www.serebii.net/swordshield/pokemon/448.png",
        caption = "Cool Pokemon!"
    )

    db.session.add(demo)

    db.session.commit()

def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()
