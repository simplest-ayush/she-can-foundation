This project is a simple referral and donation tracking portal for interns. It allows users to sign up with a referral code, track their donations, rewards, and view a leaderboard of top performers. The frontend is built using React with Tailwind CSS, and the backend is built with Node.js, Express, and MongoDB for data storage.

Features
User Signup/Login: Users can sign up or log in using their name which generates a referral code.

Dashboard: Displays user information including referral code, total donations, and rewards.

Leaderboard: Shows top interns ranked by total donations.

Referral Code Tracking: Users’ referrals are tracked for donation contributions.

MongoDB Integration: User data is stored and fetched from a MongoDB database.

Responsive UI: Clean, modern, and responsive UI built with Tailwind CSS.

Technologies Used
Frontend: React, React Router, Tailwind CSS, Axios

Backend: Node.js, Express.js, MongoDB, Mongoose, CORS, dotenv

Tools: Nodemon (for development), Postman (for API testing)

Project Structure
/frontend - React frontend (components, pages, routing, styles)

/backend - Express backend (API, controllers, routes, models, database connection)

/models - Mongoose schemas for MongoDB

/controllers - Backend logic for handling requests

/routes - API route definitions

Getting Started
Prerequisites
Node.js v14+

MongoDB (local or Atlas)

npm or yarn

Installation
Clone the repository:

text
git clone <repository-url>
cd <repository-folder>
Setup and start backend server:

text
cd server
npm install
Configure .env file (example):

text
PORT=8000
MONGO_URI=<your-mongodb-connection-string>
CORS_ORIGIN=http://localhost:5173
Start the backend:

text
npm run dev
Setup and start frontend client:

text
cd ../client
npm install
npm run dev
Open your browser and navigate to:

text
http://localhost:5173
API Endpoints
POST /api/signup — Register a new user

GET /api/user/:referral — Get user details by referral code

GET /api/leaderboard — Get list of users ranked by donations

Usage
Signup as a new user providing your name.

Login using the same name to access your dashboard.

View your referral code, total donations raised, and rewards.

Navigate to the leaderboard to see top interns.

Future Improvements
Add user authentication with JWT.

Enable real referral tracking with invite links.

Add donation transactions and payment gateway.

Improve UI/UX with animations and notifications.

Unit and integration tests.

License
MIT License

This README provides a comprehensive overview to get started, understand, and run your Intern Referral Portal project effectively.
