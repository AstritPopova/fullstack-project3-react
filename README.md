# Full Stack Project 3 – React Frontend for Coursework App

This is a simple React frontend for your **Full Stack Project 2 – Coursework App**.

The app talks to your existing backend on Render.  
It loads the items from `/api/items` and lets you:

- See all coursework items in a list
- Search and filter items
- Mark items as done / not done
- Add a new item
- Edit an existing item in a small modal
- Delete an item
- See basic stats (how many done / not done) on a separate page

The frontend is built with:

- React (functional components + hooks)
- React Router (two main views: **Items** and **Stats**)
- Fetch API for calling your backend
- Simple responsive CSS (no heavy UI library, easy to read)

---

## 1. Environment variable

Create a `.env` file in the project root with this key:

```bash
VITE_API_BASE_URL=https://fullstack-project2-uves.onrender.com/api
```

> If your backend URL changes, just update this value.

---

## 2. Run locally

1. Open the folder in VS Code.
2. Install packages:

   ```bash
   npm install
   ```

3. Start dev server:

   ```bash
   npm run dev
   ```

4. Open the URL from the terminal (usually `http://localhost:5173`).

Make sure your **Project 2 backend on Render** is running and healthy.  
The frontend expects these endpoints to exist:

- `GET    /api/items`
- `POST   /api/items`
- `PUT    /api/items/:id`
- `DELETE /api/items/:id`

If your field names are a bit different (for example `text` instead of `title`),
you can adjust them in **`src/api/itemsApi.js`** and **`src/components/ItemCard.jsx`**.

---

## 3. Deploy to Render (Static Site)

1. Push this project to a new GitHub repo.
2. In Render, choose **New → Static Site**.
3. Select your repo.
4. Set:

   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Environment variable:** `VITE_API_BASE_URL` with your backend URL  
     (for example `https://fullstack-project2-uves.onrender.com/api`).

5. Save and let Render build and deploy the site.

Remember to keep database secrets only in the **backend** `.env`, not here.

---

## 4. What you can show in the video

In your Project 3 video you can:

- Show how the app loads items from your Project 2 API.
- Show search and filter.
- Add a new item.
- Edit an item in the modal.
- Mark an item as done.
- Delete an item.
- Show the Stats page (counts of done / not done).
- Quickly explain the file structure and environment variable.

This should cover React + API + CRUD + routing + documentation nicely.
