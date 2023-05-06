# nodejs-person-post app

This application allows you to create/get/update/delete a users. Users able to create a post title and context. Also you can get users posts by query param ?id=(user_id)

You can send requests:

1. Create a user
POST http://localhost:8080/api/user
Body:
{
    "name":"Carl",
    "surname":"Johnson"
}
<img width="291" alt="image" src="https://user-images.githubusercontent.com/80161180/236622570-80a03b17-fabc-425c-a810-746cf167d1bd.png">


2.Get all users
GET http://localhost:8080/api/user
BODY: none

3.Get user by id
GET http://localhost:8080/api/user/1
BODY: none

4.Update user
GET http://localhost:8080/api/user
BODY: 




{
    "title": "fourth post",
    "content":"This is my fourth post",
    "userId": "6"
}
