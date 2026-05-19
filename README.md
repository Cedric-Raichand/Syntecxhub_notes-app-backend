# 📝 Notes App Backend

A RESTful Notes Application Backend built using Node.js, Express, MongoDB, JWT, and Mongoose. The API supports user authentication, protected CRUD operations for notes, note ownership, archive functionality, and MongoDB population.

---

## 🚀 Features

- User Registration & Login
- JWT Authentication
- Protected Routes
- Create Notes
- Read Notes
- Update Notes
- Delete Notes
- Archive Notes (Soft Delete)
- User-specific Notes
- Mongoose Populate Relationship
- Fetch User with Notes

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

---

## 📁 Project Structure


notes-app-backend/
│── server.js
│── middleware/
│   └── authMiddleware.js
│── models/
│   ├── User.js
│   └── Note.js
│── routes/
│   ├── authRoutes.js
│   └── noteRoutes.js
│── .env
│── package.json
```

---

## ⚙️ Installation

### 1. Install dependencies

```bash
npm install
```

---

### 2. Create `.env`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=mysecretkey
PORT=5000
```

---

### 3. Run the server

```bash
node server.js
```

---

## 🔐 Authentication Endpoints

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## 📝 Notes Endpoints

### Create Note

```http
POST /api/notes
```

### Get All Notes

```http
GET /api/notes
```

### Get Single Note

```http
GET /api/notes/:id
```

### Update Note

```http
PUT /api/notes/:id
```

### Archive Note

```http
PUT /api/notes/:id/archive
```

### Delete Note

```http
DELETE /api/notes/:id
```

### Get User with Notes (Populate)

```http
GET /api/notes/user/details
```

---

## 🔒 Protected Routes

For all `/api/notes/*` routes:

```text
Authorization: Bearer YOUR_TOKEN
```

---

## 🧪 Testing

Use Postman or similar API testing tools.

---

## 👨‍💻 Author

Built as part of Backend Development Internship tasks.

---

## 📜 License

For educational purposes only.
