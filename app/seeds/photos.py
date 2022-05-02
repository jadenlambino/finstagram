from app.models import db, Photo

def seed_photos():
    demo = Photo(
        user_id = 1,
        photo_url = "https://www.serebii.net/swordshield/pokemon/448.png",
        caption = "Cool Pokemon!"
    )
    demo2 = Photo (
        user_id = 1,
        photo_url = "https://static.wikia.nocookie.net/sonicpokemon/images/9/95/Gengar_AG_anime.png/revision/latest?cb=20130620042420",
        caption = "I love Application Academy"
    )

    db.session.add(demo)
    db.session.add(demo2)

    db.session.commit()

def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()
