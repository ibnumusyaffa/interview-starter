# Badr interview

## How to start

- clone this repo
- npm install
- npm run dev


## API

GET http://dev.badr.co.id:7777/user?page=1&limit=5&keyword=marlon

```json
{
  "meta": {
    "total": 1,
    "page": 1,
    "limit": 5,
    "totalPages": 1
  },
  "data": [
    {
      "id": 97,
      "email": "emmitt64@gmail.com",
      "fullname": "Marlon Mraz",
      "password": "$2a$10$DqPlXxserEMny20d1pX2h..XE3tf88TNyrce8P3SzK3HWxPmSH9rK",
      "created_at": "2023-11-07T11:57:35.000Z",
      "updated_at": "2023-11-07T11:57:35.000Z"
    }
  ]
}

```

DELETE http://dev.badr.co.id:7777/user/<userId>

```json
{ 
  "message": "User deleted successfully" 
}

```

## Demo

[http://dev.badr.co.id:5555/users](http://dev.badr.co.id:5555/users)


## Priority

- List users
- Pagination + Limit
- Search
- Delete 