from flask_sqlalchemy import SQLAlchemy
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get('Schema')

db = SQLAlchemy()


def add_prefix_for_prod(attr):
    if environment == "production":
        return f"{SCHEMA}.{attr}"
    else:
        return attr
