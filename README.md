# CRUD with MySQL
> A simple CRUD made with MySQL

[badge:travis] [badge:coveralls]

### Installation
```sh
$ git clone https://github.com/TacioAntonio/CRUD-MySQL
$ cd CRUD-MySQL
$ npm i
$ npm start
```

### Endpoints
#### Show users
Returns json data about a single user.
**URL**
/users
**Method**
GET
**Success response**
_**Code:**_ 200 Success
_**Content:**_
```json
[
    {
        "id": 1,
        "username": "Maria",
        "email": "maria@gmail.com",
        "createdAt": "2020-06-03T00:13:08.000Z",
        "updatedAt": "2020-06-03T00:13:08.000Z"
      },
      {
        "id": 2,
        "username": "Max",
        "email": "max@hotmail.com",
        "createdAt": "2020-06-03T00:34:24.000Z",
        "updatedAt": "2020-06-03T00:34:24.000Z"
      },
      {
        "id": 3,
        "username": "Luiz",
        "email": "luiz@gmail.com",
        "createdAt": "2020-06-03T02:34:10.000Z",
        "updatedAt": "2020-06-03T02:34:10.000Z"
      }
    ]
```
**Error response**
_**Code:**_ 400 Invalid request
_**Content:**_
```js
{ success: false, message: 'Collect users fail', statusCode: 400 }
```

#### Show user
Returns json data about a single user.
**URL**
/users/:id
**Method**
GET
**URL Params**
_**Required:**_
id=[int]
**Success response**
_**Code:**_ 200 Success
_**Content:**_
```json
{
  "id": 1,
  "username": "Maria",
  "email": "maria@gmail.com",
  "createdAt": "2020-06-03T00:13:08.000Z",
  "updatedAt": "2020-06-03T00:13:08.000Z"
}
```
**Error response**
_**Code:**_ 400 Invalid request
_**Content:**_
```js
{ success: false, message: 'Collect users fail', statusCode: 400 }
```

#### Insert user
Insert data about a single user.
**URL**
/users
**Method**
POST
**Data params**
```json
{
    "username": "Maria",
    "email": "maria@gmail.com",
    "password": "1234589-200x122"
}
```
**Success response**
_**Code:**_ 200 Success
_**Content:**_
```js
{ success: true, message: 'The user has been successfully inserted.', statusCode: 200 }
```
**Error response**
_**Code:**_ 400 Invalid request
_**Content:**_
```js
{ success: false, message: 'User already exists.', statusCode: 400 }
```
OR
```js
{ success: false, message: 'Registration failed.', statusCode: 400 }
```

#### Update user
Update data of a single user.
**URL**
/users/:id
**Method**
PUT
**URL Params**
_**Required:**_
id=[int]
**Data params**
```json
{
    "username": "Maria",
    "password": "123458888-200"
}
```
**Success response**
_**Code:**_ 200 Success
_**Content:**_
```js
{ success: true, message: 'Update successfully.', statusCode: 200 }
```
**Error response**
_**Code:**_ 400 Invalid request
_**Content:**_
```js
{ success: false, message: 'User does not exists.', statusCode: 400 }
```
OR
```js
{ success: false, message: 'Update failed.', statusCode: 400 }
```

#### Delete user
Delete data of a single user.
**URL**
/users/:id
**Method**
DELETE
**URL Params**
_**Required:**_
id=[int]
**Success response**
_**Code:**_ 200 Success
_**Content:**_
```js
{ success: true, message: 'User deleted.', statusCode: 200 }
```
**Error response**
_**Code:**_ 400 Invalid request
_**Content:**_
```js
{ success: false, message: 'User does not exists.', statusCode: 400 }
```
OR
```js
{ success: false, message: 'Delete failed.', statusCode: 400 }
```

#### Login
Generate token for a user.
**URL**
/login
**Method**
POST
**Data params**
```json
{
  "email": "maria@gmail.com",
  "password": "123458888-200"
}
```
**Success response**
_**Code:**_ 200 Success
_**Content:**_
```js
{
  "auth": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkkXVCJ9.eyJlbWFpbCI6Im1hcmlhMjAweDFAZ21haWwuY29tIiciaWF0IjoxNTkbMzEyMjU5LCJleHAiOjE1OTGzOTg2NTl9.taeA11bm1qNPCfHQYEvyoLCLyz8N2CDD_HmIdaTB_Bg",
  "statusCode": 200
}
```
**Error response**
_**Code:**_ 400 Invalid request
_**Content:**_
```js
{ success: false, message: 'Invalid email or password.', statusCode: 400 }
```
OR
```js
{ success: false, message: 'Email does not exist.', statusCode: 400 }
```
OR
```js
{ success: false, message: 'Incorrect password.', statusCode: 400 }
```
OR
```js
{ success: false, message: 'Login error.', statusCode: 400 }
```

#### Logout
Close the connection.
**URL**
/logout
**Method**
DELETE
**Success response**
_**Code:**_ 200 Success
_**Content:**_
```js
{ auth: false, token: null, statusCode: 200 }
```

#### Send email
Contact email.
**URL**
/contact
**Method**
POST
**Data params**
```json
{
  "subject": "Assunto",
  "text": "Oi"
}
```
**Success response**
_**Code:**_ 200 Success
_**Content:**_
```js
{ success: true, message: "The email was sent successfully.", statusCode: 200 }
```
**Error response**
_**Code:**_ 400 Invalid request
_**Content:**_
```js
{ success: false, message: 'Email error.', statusCode: 400 }
```
OR
```js
{ success: false, message: 'Subject error.', statusCode: 400 }
```
OR
```js
{ success: false, message: 'Message error.', statusCode: 400 }
```
OR
```js
{ success: false, message: 'Sending email failed.', statusCode: 400 }
```

### Running the tests
**Running tests**
```sh
$ npm run test
```
**Code coverage**
```sh
$ npm run coverage
```

## Contribution
Please read [CONTRIBUTING.md](https://github.com/TacioAntonio/CRUD-MySQL/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/TacioAntonio/CRUD-MySQL/tags).

## Authors
| ![Tácio Antônio](https://avatars2.githubusercontent.com/u/44682965?s=150&=4)
| -
| [Tácio Antônio](https://github.com/TacioAntonio/)

See also the list of [contributors](https://github.com/TacioAntonio/CRUD-MySQL/graphs/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/TacioAntonio/CRUD-MySQL/blob/master/LICENSE.md) file for details.
