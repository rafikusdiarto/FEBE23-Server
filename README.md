## USER
### REGISTER
```
POST /api/users HTTP/1.1
Host: localhost:5555
Content-Type: application/json
Content-Length: 117

{
    "email": "email@email.com",
    "username": "username",
    "password": "password",
    "role": "MODERATOR"
}
```

### LOGIN
```
POST /api/users/login HTTP/1.1
Host: localhost:5555
Content-Type: application/json
Content-Length: 76

{
    "email": "email@email.com",
    "password": "password"
}
```

## BOARD
### ALL
```
GET /api/boards/all HTTP/1.1
Host: localhost:5555
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODMxMWI3OGM1MzUyNjRiMTdjZjdjYiIsImVtYWlsIjoiS2V5c2hhd245QHlhaG9vLmNvbSIsInVzZXJuYW1lIjoiaGFsIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNjcyMTI2NDYzLCJpYXQiOjE2Njk1MzQ0NjN9.mEFym8Iu6rlytMmaICREUT2TZlriT3LAFxHKSr71U34
```
### ADMIN
```
GET /api/boards/admin HTTP/1.1
Host: localhost:5555
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODMxMWI3OGM1MzUyNjRiMTdjZjdjYiIsImVtYWlsIjoiS2V5c2hhd245QHlhaG9vLmNvbSIsInVzZXJuYW1lIjoiaGFsIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNjcyMTI2NDYzLCJpYXQiOjE2Njk1MzQ0NjN9.mEFym8Iu6rlytMmaICREUT2TZlriT3LAFxHKSr71U34
```
### USER
```
GET /api/boards/user HTTP/1.1
Host: localhost:5555
```
### MODERATOR
```
GET /api/boards/moderator HTTP/1.1
Host: localhost:5555
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODlmNDY3OWJkZTExNmZjNDA4N2FlNiIsImVtYWlsIjoiQ29ucmFkMzhAZ21haWwuY29tIiwidXNlcm5hbWUiOiJub2FoIiwicm9sZSI6Ik1PREVSQVRPUiIsImV4cCI6MTY3MjU3NzQxMywiaWF0IjoxNjY5OTg1NDEzfQ.RJIbk1CCu6x-BcI00BIHyVSqGqdoJh3TAtP-wqkO-zA
```

## PARTNER
### GET
```
GET /api/partners HTTP/1.1
Host: localhost:5555
```
### GET BY ID
```
GET /api/partners/:id HTTP/1.1
Host: localhost:5555
```
### CREATE
```
POST /api/partners HTTP/1.1
Host: localhost:5555
x-app-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZTA0OWZmY2FjZmRhNGQ2MjE5ZDQ3YjQwYjIxNDIyYmFhODFlNTQ5ZjllM2IwOWIzNTMwNTBkMmRlMzZiZjExYjVlYzlkNmYxMWMwYTgwNzEyZTM2NDRlMzE4NzQ5MDg0MzIwNWNjMTk5NGVkZjhlZDYxOWQxNjc0NmI4ZTJlZDZlMDBjYjNiNjYzNTlkYWNjNTk3ZGM2MDBjZjA3ZTg4YzBiMGI3MmJiZjg5NWFkZWQ0MDY5NTQ2MTgzMzJmZWEzIiwiaWF0IjoxNjY5NzkzOTg1LCJleHAiOjE2Njk4ODAzODV9._CZbsdz7iEvOmJnmtITy1IDbXXl-DCsmTrWBc_Q0gDk
Content-Type: application/json
Content-Length: 239

{
    "nama": "nama",
    "pengalaman": "pengalaman",
    "pendidikan": "pendidikan",
    "jenis_kelamin": "jenis_kelamin",
    "asal_kota": "asal_kota",
    "rating": 5,
    "deskripsi": "deskripsi",
    "tahun_bergabung": 2020
}
```
### UPDATE
```
PUT /api/partners/638311b78c535264b17cf7b8 HTTP/1.1
Host: localhost:5555
x-app-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZTA0OWZmY2FjZmRhNGQ2MjE5ZDQ3YjQwYjIxNDIyYmFhODFlNTQ5ZjllM2IwOWIzNTMwNTBkMmRlMzZiZjExYjVlYzlkNmYxMWMwYTgwNzEyZTM2NDRlMzE4NzQ5MDg0MzIwNWNjMTk5NGVkZjhlZDYxOWQxNjc0NmI4ZTJlZDZlMDBjYjNiNjYzNTlkYWNjNTk3ZGM2MDBjZjA3ZTg4YzBiMGI3MmJiZjg5NWFkZWQ0MDY5NTQ2MTgzMzJmZWEzIiwiaWF0IjoxNjY5NzkzOTg1LCJleHAiOjE2Njk4ODAzODV9._CZbsdz7iEvOmJnmtITy1IDbXXl-DCsmTrWBc_Q0gDk
Content-Type: application/json
Content-Length: 278

{
    "id": "638311b78c535264b17cf7b8",
    "nama": "nama",
    "pengalaman": "pengalaman",
    "pendidikan": "pendidikan",
    "jenis_kelamin": "jenis_kelamin",
    "asal_kota": "asal_kota",
    "rating": 5,
    "deskripsi": "deskripsi",
    "tahun_bergabung": 2020
}
```
### DELETE
```
DELETE /api/partners/638311b78c535264b17cf7b8 HTTP/1.1
Host: localhost:5555
```