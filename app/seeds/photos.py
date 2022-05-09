from app.models import db, Photo

def seed_photos():
    demo = Photo(
        user_id = 1,
        photo_url = "https://res.cloudinary.com/dvutmffq9/image/upload/v1652072474/photo-1543466835-00a7907e9de1_xl2kvz.jpg",
        caption = "This dog is too lit with it"
    )
    demo2 = Photo (
        user_id = 1,
        photo_url = "https://res.cloudinary.com/dvutmffq9/image/upload/v1651867450/sample.jpg",
        caption = "I love App Academy"
    )
    demo3 = Photo (
        user_id = 1,
        photo_url = 'https://res.cloudinary.com/dvutmffq9/image/upload/v1652071941/photo-1487058792275-0ad4aaf24ca7_vnrbob.jpg',
        caption = 'Hacker Hackerman reporting for duty'
    )
    demo4 = Photo (
        user_id = 1,
        photo_url = 'https://res.cloudinary.com/dvutmffq9/image/upload/v1652071905/photo-1487186431619-869dc62557b6_cvbbtk.jpg',
        caption = 'I love the city!'
    )
    demo5 = Photo (
        user_id = 1,
        photo_url = 'https://res.cloudinary.com/dvutmffq9/image/upload/v1652071868/photo-1651984910556-52f497f09aa9_hq6ykx.jpg',
        caption = 'Metro no booming'
    )
    demo6 = Photo (
        user_id = 2,
        photo_url = 'https://res.cloudinary.com/dvutmffq9/image/upload/v1652071848/photo-1652006286607-ed31de7dff28_shofed.jpg',
        caption = 'Sick car I saw earlier!'
    )
    demo7 = Photo (
        user_id = 2,
        photo_url = 'https://res.cloudinary.com/dvutmffq9/image/upload/v1652071838/photo-1651959083489-d8a39212a8df_es2ehb.jpg',
        caption = 'Bridge Check'
    )
    demo8 = Photo (
        user_id = 2,
        photo_url = 'https://res.cloudinary.com/dvutmffq9/image/upload/v1652071816/simon-vollformat-GvhBf6__SLE-unsplash_l0tybc.jpg',
        caption = 'Sick building'
    )
    demo9 = Photo (
        user_id = 2,
        photo_url = 'https://res.cloudinary.com/dvutmffq9/image/upload/v1652071753/phil-lev-XhTfgPLWtFM-unsplash_fw2fal.jpg',
        caption = 'Sick building part 2'
    )
    demo10 = Photo (
        user_id = 2,
        photo_url = 'https://res.cloudinary.com/dvutmffq9/image/upload/v1652071727/frank-eiffert-dj0eZpRR7Mw-unsplash_z3q2tp.jpg',
        caption = 'Feeling: at home'
    )
    demo11 = Photo (
        user_id = 3,
        photo_url = 'https://res.cloudinary.com/dvutmffq9/image/upload/v1652071712/ksama-Y5H9IIDhdAA-unsplash_zh6gb9.jpg',
        caption = 'I love bridges'
    )
    demo12 = Photo (
        user_id = 3,
        photo_url = 'https://res.cloudinary.com/dvutmffq9/image/upload/v1652071692/lucas-alexander-dFo0IXPz5XY-unsplash_jwqafr.jpg',
        caption = 'I have no idea how I got here'
    )


    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)
    db.session.add(demo11)
    db.session.add(demo12)

    db.session.commit()

def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()
