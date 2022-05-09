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
    demo5 = Comment (
        photo_id= 3,
        user_id = 2,
        body = "This is a great picture!"
    )
    demo6 = Comment (
        photo_id= 3,
        user_id = 3,
        body = "I love this picture!"
    )
    demo7 = Comment (
        photo_id= 4,
        user_id = 3,
        body = "You need to buy a better camera dude"
    )
    demo8 = Comment (
        photo_id= 4,
        user_id = 2,
        body = "Yeah your camera is not very good"
    )
    demo9 = Comment (
        photo_id= 5,
        user_id = 2,
        body = "This is way too lit"
    )
    demo10 = Comment (
        photo_id= 5,
        user_id = 3,
        body = "Wonderful!"
    )
    demo11 = Comment (
        photo_id= 6,
        user_id = 1,
        body = "Hi marnie!"
    )
    demo12 = Comment (
        photo_id= 6,
        user_id = 3,
        body = "Great picture!"
    )
    demo13 = Comment (
        photo_id= 7,
        user_id = 1,
        body = "Too picture with it"
    )
    demo14 = Comment (
        photo_id= 7,
        user_id = 3,
        body = "I love bridges!!!"
    )
    demo15 = Comment (
        photo_id= 8,
        user_id = 1,
        body = "I love buildings!!"
    )
    demo16 = Comment (
        photo_id= 8,
        user_id = 3,
        body = "W building"
    )
    demo17 = Comment (
        photo_id= 9,
        user_id = 3,
        body = "This building is even better than the last one!"
    )
    demo18 = Comment (
        photo_id= 9,
        user_id = 1,
        body = "I want to go here!"
    )
    demo19 = Comment (
        photo_id= 10,
        user_id = 2,
        body = "I am also feeling at home"
    )
    demo20 = Comment (
        photo_id= 10,
        user_id = 1,
        body = "Love it!"
    )
    demo21 = Comment (
        photo_id= 11,
        user_id = 2,
        body = "This bridge is my favorite"
    )
    demo22 = Comment (
        photo_id= 11,
        user_id = 1,
        body = "I want to walk across that so bad"
    )
    demo23 = Comment (
        photo_id= 12,
        user_id = 2,
        body = "Sending help right now. Stay put"
    )
    demo24 = Comment (
        photo_id= 12,
        user_id = 1,
        body = "Dude where are you"
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
    db.session.add(demo13)
    db.session.add(demo14)
    db.session.add(demo15)
    db.session.add(demo16)
    db.session.add(demo17)
    db.session.add(demo18)
    db.session.add(demo19)
    db.session.add(demo20)
    db.session.add(demo21)
    db.session.add(demo22)
    db.session.add(demo23)
    db.session.add(demo24)


    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
