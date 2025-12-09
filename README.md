<<<<<<< HEAD

=======
# Full Stack Project 3 – React Frontend

This is my submission for the Full Stack Project 3.  
The goal was to build a React frontend for my existing Project 2 backend using:
- React + Vite (functional components and hooks)
- REST API integration with my own backend
- Secure environment variables
- Deployment on Render Static Web Service

---

##  Live Links

| Service | URL |
|---------|-----|
|  Live App (Render – React) | https://YOUR-FRONTEND-RENDER-URL-HERE/ |
|  Backend API (Render) | https://fullstack-project2-uves.onrender.com/api/items |
|  GitHub Repository | https://github.com/AstritPopova/fullstack-project3-react |
|  Video link | *Add video link here* |

---

##  Features

- React frontend for the Project 2 coursework API
- Uses environment variable `VITE_API_BASE_URL` to connect to the backend
- CRUD API for items:
  - `GET /api/items` – list all
  - `POST /api/items` – add new
  - `PATCH /api/items/:id` – edit / mark done
  - `DELETE /api/items/:id` – remove
- UI to:
  - View all items coming from the backend
  - Add new items with a form
  - Edit existing items
  - Mark items as done / not done
  - Delete items
  - Search and filter items
- Loading and error messages shown in the UI
- Responsive layout so it works on smaller screens as well

---

##  Screenshots

### Items View (Localhost)
<img width="1900" height="924" alt="Project 3 React Frontend Items View" src="PASTE-YOUR-SCREENSHOT-URL-HERE" />

### Stats / API View
<img width="951" height="898" alt="Project 3 React Frontend Stats or API View" src="PASTE-YOUR-SECOND-SCREENSHOT-URL-HERE" />

---

##  Run Locally

```bash
git clone https://github.com/AstritPopova/fullstack-project3-react
cd fullstack-project3-react

copy .env.example .env    # Windows
cp .env.example .env      # macOS / Linux

npm install
npm run dev
Then open the app in your browser at:
http://localhost:5173

Reflection
During this project, I learned how to build a React frontend that talks to my own backend API from Project 2. I practiced using React hooks, managing component state, handling side effects with useEffect, and updating the UI based on data coming from the server.

One important learning point was understanding how to handle CORS and environment variables in a frontend project. I used .env to store the public API base URL and configured the backend to allow requests from my React app. This helped me understand how frontend and backend need to work together when the app is deployed online.

There were also some challenges, for example fixing CORS errors, connecting the React app to the correct Render URL, and debugging failed fetch requests. I solved these issues by checking the browser console, reading error messages carefully, and testing one change at a time. This improved my confidence in troubleshooting frontend–backend problems.

Overall, I feel that I have grown in understanding how a modern full-stack application works: React on the client side and Node/Express on the server side. I am happy that I was able to deploy the project successfully and see my React frontend using my own API live on the internet. This project was very useful practice for future web development work.
>>>>>>> da3a371 (Update README for Project 3)
