# [Task Management Application](https://task-management-7695a.web.app)

Welcome to **Task Management Application**. An Online Tutor Booking Platform is a system designed to connect students with qualified tutors for various subjects or skills.

---

### Technologies used

- Vite React,
- Tailwind CSS use,
- daisyUI Library,
- React Router,
- React Hook,
- React Component,
- Firebase Authentication,
- JWT Authentication,
- React swiper,
- React framer-motion,
- React react-router-dom,
- React Fontawasomeicon,
- The design responsive (Mobile , Tab, Desktop).

### key features of Task Management Application

**_ Task Management _**

- Create Tasks – Add new tasks with a title (max 50 characters) and an optional description (max 200 characters).
- Edit Tasks – Modify task details, including title and description.
- Delete Tasks – Remove tasks when no longer needed.
- Auto Timestamp – Each task gets an automatic timestamp upon creation.

**_ Categorization & Organization _**

- ask Categories – Tasks are organized into To-Do, In Progress, and Done columns.
- Drag-and-Drop – Move tasks between categories effortlessly.
- Reordering – Reorder tasks within the same category for prioritization.

**_ Authentication _**

- Google authentication using Firebase, ensuring secure login and user account management.
  Registration and login for personalized experiences like order tracking and wishlists.

**_ Responsive Design _**

- Built with React, Tailwind CSS, and DaisyUI for a seamless experience on both desktop and mobile devices.

**_ User Interface & Experience _**

- Clean & Responsive UI – Built with React, Tailwind CSS, DaisyUI, and Framer Motion.
- Smooth Animations – Uses Framer Motion for fluid transitions.
- Dark Mode Support – Optional dark mode for better usability.

**_ Real-Time Synchronization _**

- Live Updates – Changes are instantly reflected across all users/devices.
- Database Integration – Stores tasks in a real-time database (e.g., Firebase).

---

---

### Project Setup

To set up the project, follow these steps:
Installation

---

1️⃣ Client site Clone the Repository

```bash
git clone https://github.com/webdev-abu/task-management-claint.git
cd task-management-app
```

2️⃣ Install Dependencies

```bash
npm install
```

3️⃣ Set Up Firebase (if using Firebase for real-time sync)

- Go to Firebase Console
- Create a new project
- Enable Firestore Database & Authentication (Google Sign-In, if needed)
- Copy Firebase config and create a .env file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4️⃣ Start the Application

```bash
npm run dev
```

Your app will be available at http://localhost:5173/ 🚀

---

Installation
1️⃣ Server Clone the Repository

```bash
git clone https://github.com/webdev-abu/task-management-server.git
cd task-management-server
```

2️⃣ Install Dependencies

```bash
npm install
```

3️⃣ Configure Environment Variables
Create a .env file in the root directory and add your Firebase or MongoDB credentials:

- For MongoDB (If Using MongoDB Instead of Firebase)

```env
PORT=5000
MONGO_URI=mongodb+srv://your_mongo_user:your_mongo_password@cluster0.mongodb.net/taskDB
JWT_SECRET=your_jwt_secret_key
```

4️⃣ Start the Server

```bash
node index.js
```

## The server will run on http://localhost:5000/ 🚀

# Live Link

# [https://task-management-7695a.web.app](https://task-management-7695a.web.app)

# Client-side GitHub Code Link

# [https://github.com/webdev-abu/task-management-claint](https://github.com/webdev-abu/task-management-claint)

# Server-side GitHub Code Link

# [https://github.com/webdev-abu/task-management-server](https://github.com/webdev-abu/task-management-server)

---
