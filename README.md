Deepnetsoft Menu Manager

A full-stack restaurant menu management application built as part of the Deepnetsoft Machine Test.

## 🔗 Live Demo

- **Live-App:** https://menu-app-solutions.netlify.app/

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React, TypeScript, Tailwind CSS |
| Backend | Express.js, TypeScript |
| Database | MongoDB Atlas |
| Deployment | Netlify (frontend), Render (backend) |

---

## ✅ Features

- Create menus (e.g. Drinks, Food, Brunch) with name and description
- Click menu tab to view items associated with that menu
- Add unlimited menu items to any menu
- Nested sub-menus with unlimited depth
- When a parent menu is clicked, shows child menus and items
- Mobile responsive design
- Dark theme matching Figma design

---

## 📁 Project Structure

```
menu-app/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── Menu.ts
│   │   │   └── MenuItem.ts
│   │   ├── routes/
│   │   │   ├── menuRoutes.ts
│   │   │   └── itemRoutes.ts
│   │   ├── controllers/
│   │   │   ├── menuController.ts
│   │   │   └── itemController.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.tsx
    │   │   └── Footer.tsx
    │   ├── pages/
    │   │   └── Menu/
    │   │       ├── Home.tsx
    │   │       ├── MenuSection.tsx
    │   │       ├── AddMenuModal.tsx
    │   │       └── AddItemModal.tsx
    │   ├── services/
    │   │   └── serverURL.ts
    │   └── App.tsx
    ├── package.json
    └── tailwind.config.js
```

---

## 🚀 Local Setup

### Prerequisites
- Node.js 18+
- MongoDB running locally or MongoDB Atlas URI

---

### Backend Setup

```bash
# Go to backend folder
cd backend

# Install packages
npm install

# Create env file
cp .env.example .env

# Edit .env with your MongoDB URI
MONGO_URI=mongodb://localhost:27017/menuapp
PORT=5000

# Start backend
npm run dev
```

Backend runs at: `http://localhost:5000`

---

### Frontend Setup

```bash
# Go to frontend folder
cd frontend

# Install packages
npm install

# Create env file
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env

# Start frontend
npm start
```

Frontend runs at: `http://localhost:3000`

---

## 🔌 API Endpoints

### Menus

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/menus` | Get all menus |
| GET | `/api/menus/:id` | Get menu by ID with submenus and items |
| POST | `/api/menus` | Create a menu |

### Items

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/items` | Create a menu item |
| GET | `/api/items/:menuId` | Get items by menu |

---

## 📝 Environment Variables

### Backend `.env`

```
MONGO_URI=mongodb://localhost:27017/menuapp
PORT=5000
FRONTEND_URL=http://localhost:3000
```

### Frontend `.env`

```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 👨‍💻 Author

**Akhil**
- GitHub: [@akhilchandps](https://github.com/akhilchandps)
