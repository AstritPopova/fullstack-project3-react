Full Stack Project 3 – React Frontend

This is my submission for the Full Stack Project 3.
The goal was to build an interactive React frontend that connects to my existing Project 2 backend REST API using:

React + Vite (functional components & hooks)

API communication with fetch

CRUD operations

Secure environment variables

Deployment on Render Static Web Service

🔗 Live Links
Service	URL
Live Frontend (Render)	Add after deployment
Backend API (Render)	https://fullstack-project2-uves.onrender.com/api/items

GitHub Repository	https://github.com/AstritPopova/fullstack-project3-react

Video link	Add when uploaded
⭐ Features

Loads items from Project 2 backend (GET /api/items)

Add new items (POST /api/items)

Edit or toggle done status (PATCH /api/items/:id)

Delete items (DELETE /api/items/:id)

Search & filtering feature

Error + loading states in UI

Responsive layout

Uses .env for API base URL (no secrets in frontend)

🖼 Screenshots
Items View (UI)

(Add screenshot here once deployed)

API Communication / Console

(Add screenshot here once deployed)

🛠 Run Locally

Clone this repository:

git clone https://github.com/AstritPopova/fullstack-project3-react
cd fullstack-project3-react

Create .env file
Windows (PowerShell)
copy .env.example .env

macOS / Linux
cp .env.example .env


Update backend URL in .env if needed:

VITE_API_BASE_URL=https://fullstack-project2-uves.onrender.com/api

Install and run
npm install
npm run dev


Then open in browser:
👉 http://localhost:5173

💡 Reflection

During this project, I learned how to build a React frontend that communicates with the backend through API calls using state and effects. I practiced handling real-time UI updates, controlled forms, and different request methods (GET, POST, PATCH, DELETE).

I also solved technical challenges such as CORS errors and environment variables. Fixing deployment issues on Render helped me understand how frontend and backend must work together in production.

Overall, this project improved my skills in React, API integration, debugging, and deployment. Seeing the UI communicate successfully with my Project 2 backend increased my confidence in full-stack development and gave me practical experience for future work.

🔐 Security & Environment Details

No sensitive environment data exposed in frontend

Public-only VITE_API_BASE_URL stored in .env

Backend secrets remain secured in Render environment
