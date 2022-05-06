# Welcome to Finstagram!

Finstagram is a web application that allows users to connect with other users and see their photos on their photo feed. This project was inspired by Instagram.

Connect and share at https://finstagram-aajp.herokuapp.com/

## Directory

[Features List](https://github.com/jadenlambino/python-group-project/wiki/Features-List)

[Database Schema](https://github.com/jadenlambino/python-group-project/wiki/Database-Schema)

[User Stories](https://github.com/jadenlambino/python-group-project/wiki/User-Stories)


## Technologies Used:
*  Python
*  Flask
*  WTForms
*  Javascript
*  React.js
*  Redux
*  Node
*  PostSQL
*  Alembic
*  HTML
*  CSS
*  Git
*  VScode

## Technical Implementation
As we were building Finstagram, we took into major consideration how our redux state shape was built. We wanted to ensure that the shape of the state was inclusive with all of the data that needed to be accessed through our react components. Shown below is the final product of how our Redux state was shaped.

![Session Store](https://res.cloudinary.com/dvutmffq9/image/upload/v1651867488/Screen_Shot_2022-05-06_at_1.02.07_PM_ck2ita.png)
![Photos Store](https://res.cloudinary.com/dvutmffq9/image/upload/v1651867502/Screen_Shot_2022-05-06_at_10.58.47_AM_jls4wk.png)
![Comments Store](https://res.cloudinary.com/dvutmffq9/image/upload/v1651867496/Screen_Shot_2022-05-06_at_10.58.59_AM_zlnzje.png)

Another challenge we had was how we would be passing data within our store to our various React components. We wanted to make our website as efficient as possible by minimizing the number of large requests to our backend database. We utilized various levels of prop-threading that initially seemed daunting but after numerous attempts of moving components around and rendering components within components we discovered a way to make our website as efficient as we possibly could have.

<img src=https://res.cloudinary.com/dvutmffq9/image/upload/v1651867829/codePic1_qhkfwg.png alt='Photos Prop Threading' width='500px' height='500px'/>

<img src=https://res.cloudinary.com/dvutmffq9/image/upload/v1651867834/codePic2_tizfnd.png alt='Comments Prop Threading' width='500px' height='500px'/>

## Future Implementations
As we finish up the initial build of our web application, we do have some features that we would want to implement in future builds of our application. Those features include functionality such as a search bar to search for other users, a system of hashtags that allow posts from users all over the website to be grouped into a single category containing the hashtag, an explore page that shows users posts that they may be interested in based on their browsing of the website and their interests in the formerly mentioned hashtag system, and a recommended follows list that displays users that are followed by other users that one is already following.

## How to Build
1. Clone the repository at https://github.com/jadenlambino/python-group-project
2. Install dependencies with
```
pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
```
3. Create a .env file based on the .env.example file
4. Set up PostqreSQL user, password, and database that matches the .env file
5. Activate the virtual shell with ```pipenv shell```
6. Migrate and seed your database with
 ```
 flask db upgrade
 flask seed all
```
7. Run the flask app with
```flask run```
8. From the root directory, change directories into the react-app folder and run the following commands to initialize the React application
```
npm install
```
9. Run the React application with
```
npm start
```

## Acknowledgements
This application was built by Jaden Lambino ([GitHub](https://github.com/jadenlambino)), Andrew Bui ([GitHub](https://github.com/bandrewi)), Phillip McCrickard ([GitHub](https://github.com/pcricket10)), and Alexander Min ([GitHub](https://github.com/AlexanderSMin))
