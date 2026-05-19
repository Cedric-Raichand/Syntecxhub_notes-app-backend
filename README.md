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

```text
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

## 🧪 Testing

Use Postman or similar API testing tools.

---

## 👨‍💻 Author

Built as part of Backend Development Internship tasks.

---

## 📜 License

For educational purposes only.
