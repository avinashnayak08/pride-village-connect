# 🌾 Pride Village Connect

> A Smart Rural Transportation & Village Connectivity Platform

Pride Village Connect is a community-powered smart transportation platform designed to improve rural mobility and village connectivity. The application helps passengers track buses in real time, view routes, estimate arrival times, and receive live updates from fellow passengers.

This project aims to solve transportation challenges in villages where GPS-enabled public transport systems are unavailable or unreliable.

---

# 📌 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚙️ Installation](#️-installation)
- [🔥 Firebase Setup](#-firebase-setup)
- [🚀 Running the Project](#-running-the-project)
- [🧠 How It Works](#-how-it-works)
- [🎯 Problem Statement](#-problem-statement)
- [🌟 Future Enhancements](#-future-enhancements)
- [📸 Screenshots](#-screenshots)
- [👨‍💻 Author](#-author)
- [🤝 Contribution](#-contribution)
- [📜 License](#-license)

---

# ✨ Features

## 🚌 Live Bus Tracking
Passengers can track buses in real time using crowd-sourced updates.

## 📍 Route Visualization
Displays complete village routes and bus stops using maps.

## ⏱️ Dynamic ETA Calculation
Calculates estimated arrival times based on current movement and distance.

## 👥 Crowd-Powered Updates
Users can mark:
- "I am on the bus"
- "Bus passed here"
- "Bus arrived"

## 🔔 Real-Time Notifications
Receive updates about bus arrivals and route activity.

## 🌐 Village Connectivity
Improves communication and accessibility between rural villages.

## 📱 Responsive UI
Works smoothly across desktop and mobile devices.

## 🔎 Smart Route Search
Quickly search for buses, villages, and routes.

---

# 🛠️ Tech Stack

## Frontend
- React.js
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- Firebase Realtime Database

## APIs & Services
- Google Maps API
- Firebase Authentication
- Firebase Hosting

---

# 📂 Project Structure

```bash
pride-village-connect/
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   ├── App.js
│   ├── index.js
│   └── firebase.js
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/avinashnayak08/pride-village-connect.git
```

## 2️⃣ Navigate into the Project Folder

```bash
cd pride-village-connect
```

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🔥 Firebase Setup

## Step 1: Create Firebase Project

Go to:
https://console.firebase.google.com/

Create a new Firebase project.

---

## Step 2: Enable Realtime Database

- Open Firebase Console
- Go to Realtime Database
- Click "Create Database"
- Start in test mode

---

## Step 3: Enable Authentication (Optional)

Enable:
- Google Authentication
- Email/Password Authentication

---

## Step 4: Get Firebase Config

Copy the Firebase configuration object.

Example:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## Step 5: Paste Config

Create or edit:

```bash
src/firebase.js
```

Paste your Firebase configuration there.

---

# 🚀 Running the Project

## Start Development Server

```bash
npm start
```

The application will run at:

```bash
http://localhost:3000
```

---

# 🧠 How It Works

1. Users update live bus location through crowd input.
2. Data is stored in Firebase Realtime Database.
3. Google Maps API visualizes the routes.
4. ETA is calculated dynamically.
5. Passengers receive live transportation updates.

---

# 🎯 Problem Statement

Rural transportation systems often face issues such as:

- ❌ No real-time bus tracking
- ❌ Uncertain arrival timings
- ❌ Poor transportation communication
- ❌ Lack of smart digital solutions

Pride Village Connect solves these problems using:
- Crowd-sourced updates
- Real-time tracking
- Smart ETA calculations
- Village route visualization

---

# 🌟 Future Enhancements

- 🤖 AI-Based ETA Prediction
- 📲 Android & iOS App
- 🛰️ GPS Device Integration
- 🔔 Push Notifications
- 🌍 Offline Mode Support
- 🗣️ Multi-Language Support
- 💳 Digital Ticket Booking
- 📊 Analytics Dashboard
- ☁️ Cloud Deployment

---

# 📸 Screenshots

## Home Page

```md
![Home Page](images/home.png)
```

## Live Bus Tracking

```md
![Tracking](images/tracking.png)
```

## Route Visualization

```md
![Routes](images/routes.png)
```

---

# 👨‍💻 Author

## Avinash Nayak

- GitHub: https://github.com/avinashnayak08
- Project: Pride Village Connect

---

# 🤝 Contribution

Contributions are welcome!

## Steps to Contribute

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Create a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you found this project useful:

- Give it a ⭐ on GitHub
- Share it with others
- Contribute to improve it

---

# 🙌 Acknowledgements

Special thanks to:
- Firebase
- Google Maps API
- Open Source Community
- Rural Transport Innovation Initiatives

---

# 📧 Contact

For queries or collaborations:

📩 avinashnayak08@gmail.com

---
