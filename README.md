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
<img width="512" alt="image" src="https://user-images.githubusercontent.com/80161180/236622701-a57142be-5a7c-4c5c-882b-17de5cc76aae.png">


2.Get all users
GET http://localhost:8080/api/user
BODY: none
<img width="464" alt="image" src="https://user-images.githubusercontent.com/80161180/236622732-0662db58-30cd-43c6-8ef6-4109b93cbc20.png">


3.Get user by id
GET http://localhost:8080/api/user/10
BODY: none
<img width="291" alt="image" src="https://user-images.githubusercontent.com/80161180/236622628-73dc266f-96d6-4024-a733-748c04ee7403.png">


4.Update user
GET http://localhost:8080/api/user
BODY: 
<img width="391" alt="image" src="https://user-images.githubusercontent.com/80161180/236622765-315b1c89-e6de-4f59-a2c8-25e87eb5d5e0.png">
<img width="489" alt="image" src="https://user-images.githubusercontent.com/80161180/236622772-c2d6a829-1a1a-4e87-b308-8924313cee91.png">

5.Delete user by id
GET http://localhost:8080/api/user/10
BODY: 
<img width="587" alt="image" src="https://user-images.githubusercontent.com/80161180/236622824-c2dff4b8-304a-4053-ac14-7eea8ad229cb.png">
<img width="579" alt="image" src="https://user-images.githubusercontent.com/80161180/236622893-049a6950-7e61-49f0-92ab-67018fbfbda7.png">



{
    "title": "fourth post",
    "content":"This is my fourth post",
    "userId": "6"
}
