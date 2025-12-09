📌 React Frontend – Full Stack Project 3

This is my submission for the Full Stack Project 3.
The goal was to build an interactive React UI that communicates with my own Project 2 backend (REST API deployed on Render).

The frontend uses modern React (hooks) and allows managing simple coursework task items.

🚀 Live Links
Service	URL
Frontend App (Render)	➜ Add here after you deploy
Backend API	https://fullstack-project2-uves.onrender.com/api/items

GitHub Repo	https://github.com/AstritPopova/fullstack-project3-react
✨ Features

✔ Built using React + Vite
✔ Fully connected to Project 2 REST API
✔ CRUD support:

GET → Load task items

POST → Add new item

PATCH → Mark as done / update name

DELETE → Remove item

✔ Search & filter items
✔ Loading + error messages
✔ Responsive UI (styled manually, no extra CSS frameworks)
✔ Secure API base URL using environment variables
✔ Deployed on Render Static Hosting

🧠 Tech Stack
Layer	Technology
Frontend	React, Vite, JavaScript, CSS
Backend	Node.js + Express (from Project 2)
Deployment	Render
Version Control	Git + GitHub
📡 API Endpoints Used (from Project 2)
Method	Endpoint	Description
GET	/api/items	List items
POST	/api/items	Create item
PATCH	/api/items/:id	Update item (done/name)
DELETE	/api/items/:id	Remove item
▶️ Run Locally
1️⃣ Clone the repository
git clone https://github.com/AstritPopova/fullstack-project3-react
cd fullstack-project3-react

2️⃣ Environment variable for API connection
🖥️ Windows (PowerShell)
copy .env.example .env

🍏 macOS / Linux
cp .env.example .env


Open .env and update the backend API URL if needed:

VITE_API_BASE_URL=https://fullstack-project2-uves.onrender.com/api

3️⃣ Install dependencies
npm install

4️⃣ Start development server
npm run dev


Then open browser:
👉 http://localhost:5173

The React UI will now load and communicate with the Render backend.

🖼️ Screenshots

I will update screenshots here

UI (Frontend Items View)

(Add screenshot here)

Stats View

(Add screenshot here)

Backend API call in browser

(Add screenshot here)

🎥 Video Presentation

I will add video link here

🧩 Reflection

During this project, I learned how to build a frontend using React that communicates with my backend through API requests. I practiced using state, handling side effects with useEffect, working with forms, and updating UI dynamically when the data changes.

I also learned how to handle CORS issues, how to use environment variables in the frontend, and how to deploy a React Vite app on Render. Fixing errors and checking browser console helped me understand debugging workflows better.

There were some small challenges when connecting to my deployed backend, but by reading logs and testing step-by-step, I solved the issues and learned a lot about real-world development.

Overall, I feel that this project improved my understanding of how frontend and backend work together in full-stack applications. I am happy that everything is deployed and working online. This project increased my confidence and gives me a strong foundation for future web development.

🔐 Environment Variables & Security Notes

✔ Frontend does not expose private database secrets
✔ Backend credentials remain only in Render .env
✔ Only public API base URL is used in React
