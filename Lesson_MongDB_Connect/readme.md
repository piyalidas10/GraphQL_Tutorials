## Add MongoDB and creating Model | Complete GraphQL tutorial
https://www.youtube.com/watch?v=WyVwfUo18pI&list=PLB97yPrFwo5i9zDrWfvkohPec3Q6EEC9J&index=7

## Run Application
```
npm start
```

## GraphQL Client Queries

### ******************************** CREATE / INSERT USER ******************************************************

![Create User](create_user.png)

```
mutation createUser($userNew:UserInput!){
  user: signupUser(userNew: $userNew){
    _id
    name
    address
    email
    password
  }
}
```

QUERY VARIABLES
-------------------------------------------------------------
```
{
  "userNew": {
    "name": "Bill Gates",
    "address": "USA",
    "email": "bill@gmail.com",
    "password": "12345"
	}
}
```

RESULT
-------------------------------------------------------------
```
{
  "data": {
    "user": {
      "_id": "643d11eb0865201e4c93e0c1",
      "name": "Bill Gates",
      "address": "USA",
      "email": "bill@gmail.com",
      "password": "$2a$12$mG8So0yvN474R4yEOhwxJuxMz3H800XlT7rzvomi9KwikCvtwEV66"
    }
  }
}
```

### *********************************** SIGN IN USER ***************************************************

![Create User](create_user.png)

```
mutation SigninUser($userSignin:UserSigninInput!) {
  user:signinUser(userSignin:$userSignin) {
    token
  }
}
```

QUERY VARIABLES
-------------------------------------------------------------
```
{
  "userSignin": {
    "email": "bill@gmail.com",
    "password": "12345"
  }
}
```

RESULT
-------------------------------------------------------------
```
{
  "data": {
    "user": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDNkMTFlYjA4NjUyMDFlNGM5M2UwYzEiLCJpYXQiOjE2ODIxNDM2ODh9.kdd9K20VFm30LFnNwGqRBlToYuEClSRWvCmXxeW0BLQ"
    }
  }
}
```

### ******************************** CREATE QUOTE AFTER LOGIN ******************************************************
At first create valid token using SigninUser. Copy "token" from response and put HTTP HEADERS of createQuote mutation
![SigninUser](SigninUser.png)

Create new tab "createQuote"
![getUserById](getUserById.png)

```
mutation createQuote($name:String!){
  createQuote(name:$name)
}
```

QUERY VARIABLES
-------------------------------------------------------------
```
{
  "name": "This is second quote"
}
```

HTTP HEADERS
-------------------------------------------------------------
```
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDNkMTFlYjA4NjUyMDFlNGM5M2UwYzEiLCJpYXQiOjE2ODIxNDk5NjN9.zGlp1eCEQvFb_GvdnnfLYdpcd63ZZbObAcPlo8DbyuE"
}
```

RESULT
-------------------------------------------------------------
```
{
  "data": {
    "createQuote": "New Quote is saved successfully"
  }
}
```

### ************************************ GET ALL USERS **************************************************

![Create User](create_user.png)

```
query getAllUsers{
  usersAll{
    _id
    name
    email
    quotes{
      name
      by
    }
  }
}
```

RESULT
-------------------------------------------------------------
```
{
  "data": {
    "usersAll": [
      {
        "_id": "643d11eb0865201e4c93e0c1",
        "name": "Bill Gates",
        "email": "bill@gmail.com",
        "quotes": [
          {
            "name": "This is first quote",
            "by": "643d11eb0865201e4c93e0c1"
          }
        ]
      },
      {
        "_id": "643e200c90b2a620e0ac075f",
        "name": "James Gates",
        "email": "james@gmail.com",
        "quotes": []
      }
    ]
  }
}
```

### ************************************* GET ALL QUOTES *************************************************

![getAllQuotes](getAllQuotes.png)

```
query getAllQuotes{
  quotesAll{
    name
    by
  }
}
```

RESULT
-------------------------------------------------------------
```
{
  "data": {
    "quotesAll": [
      {
        "name": "This is first quote",
        "by": "643d11eb0865201e4c93e0c1"
      }
    ]
  }
}
```

### ********************************* GET ALL QUOTES WITH USERID & USER NAME ************************************

![getUserById](getUserById.png)

```
query getUserById($userID:ID!){
  userById(_id: $userID){
    _id
    name
    email
    quotes{
      name
    }
  }
}
```

QUERY VARIABLES
-------------------------------------------------------------
```
{
  "userID": "643d11eb0865201e4c93e0c1"
}
```

RESULT
-------------------------------------------------------------
```
{
  "data": {
    "userById": {
      "_id": "643d11eb0865201e4c93e0c1",
      "name": "Bill Gates",
      "email": "bill@gmail.com",
      "quotes": [
        {
          "name": "This is first quote"
        }
      ]
    }
  }
}
```

### ******************************** GET QUOTES BY USERID ******************************************************

![getQuoteByUserID](getQuoteByUserID.png)

```
query getQuoteByUserID($quoteBy:ID!){
  iquote(by: $quoteBy){
    name
  }
}
```

QUERY VARIABLES
-------------------------------------------------------------
```
{
  "quoteBy": "643d11eb0865201e4c93e0c1"
}
```

RESULT
-------------------------------------------------------------
```
{
  "data": {
    "iquote": [
      {
        "name": "This is first quote"
      }
    ]
  }
}
```

