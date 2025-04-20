# ☕ Caffinity — Coffee Social Platform

Caffinity is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application that lets coffee enthusiasts connect, share, and react to various coffee recipes. Users can like, dislike, or mark recipes as neutral, and receive personalized recommendations based on their reactions.

![image](https://github.com/user-attachments/assets/b3e8667e-fd83-4701-a61c-7f74a34ce9ce)


![image](https://github.com/user-attachments/assets/b7cd0343-5f2e-4c43-a1e5-e94affdecd3b)


![image](https://github.com/user-attachments/assets/0e22c7a8-21eb-4d2b-a12c-1c819cd85deb)


![image](https://github.com/user-attachments/assets/b18fbe5d-7ce7-4538-8577-c94688c2cc94)


---

## 📸 Features

### 🔐 Authentication
- User registration and login using JWT
- Secure password hashing with bcrypt
- Protected routes for authenticated users

### ☕ Coffee Recipes
- View a curated list of coffee recipes
- Uploaded trending recipe (By admin)
- Each recipe displays title, description, ingredients, and image

### 👍 Reactions
- Users can:
  - 👍 Like
  - 👎 Dislike
  - 😐 Mark Neutral
- Real-time update of reaction counts per recipe

### 🧠 Smart Recommendations
- Based on your likes and dislikes, Caffinity recommends recipes
- Personalized feed for every user


---

## 🛠️ Tech Stack

### Frontend
- **React.js** with Hooks and Context API
- **React Router** for navigation
- **Axios** for HTTP requests
- **CSS/Styled Components** for styling (update if you used Tailwind, Bootstrap, etc.)

### Backend
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **bcrypt** for password hashing

---

## Setup Client

cd client
npm install
npm start

## Setup Server

cd server
npm install
npm run dev

