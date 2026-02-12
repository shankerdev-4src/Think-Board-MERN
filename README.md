# 📝 Think-Board


ThinkBoard is a minimalist full‑stack web application for sharing short thoughts, experiences, and stories.  
It allows users to **create, read, update, and delete notes** in a clean card‑based layout with a focused reading experience.  

Built using the **MERN Stack** (MongoDB, Express, React, Node.js) for speed, simplicity, and scalability.

🌐 **Live Demo:** https://think-board-mern-6yjs.onrender.com

---

## 🚀 Features

- 📝 Create new notes  
- 📖 View all notes in a card‑based layout  
- 🔍 Read individual notes in a focused view  
- ✏️ Update existing notes  
- 🗑️ Delete notes  
- ⚡ Fast frontend powered by Vite  
- 🎨 Styled with Tailwind CSS  
- 🔄 RESTful API integration  
- 🌐 MongoDB database connection  

---

## 🔶 Project Architecture

The project follows a modular **MERN stack structure** with clear separation of concerns.

### Backend (Node.js + Express + MongoDB)

- `config/db.js` → MongoDB connection setup  
- `models/Note.js` → Note schema using Mongoose  
- `controllers/notesControllers.js` → Business logic  
- `routes/notesRoutes.js` → API routes  
- `server.js` → Express server configuration  

### Frontend (React + Vite + Tailwind)

- `src/pages/` → Main pages (HomePage, CreatePage, NoteDetailPage, Homemain)  
- `src/components/` → Reusable UI components (Navbar, NoteCard, RateLimitedUI, NotesNotFound)  
- `src/lib/axios.js` → Axios instance for API calls  
- `src/lib/utils.js` → Helper functions (e.g., date formatting)  
- `index.css` → Tailwind + custom styles  

---

