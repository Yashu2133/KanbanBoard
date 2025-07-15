## 📋KANBANBOARD

A beginner-friendly Kanban-style task management app built with React JS and Tailwind CSS. This app allows users to create, view, drag, and manage tasks across columns like To Do, Doing, and Done. It uses react-beautiful-dnd for drag-and-drop interactions and localStorage for saving tasks even after page refresh.

---

## 🔍 Project Description

The Kanban Task Board is a simple and interactive task management web application built using React. It allows users to visually organize tasks into three main columns:

1. TO DO  
2. DOING
3. DONE

---

## 🛠️ Tech Stack

- **React JS**
- **Tailwind CSS**
- **react-beautiful-dnd**
- **Context API**
- **UUID**
- **Vite**

---

## 🗂️ Folder Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── TaskBoard.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskColumn.jsx
│   │   └── TaskForm.jsx
│   ├── context/
│   │   └── TaskContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── index.html
├── package.json
└── README.md

```

---

## 💻 How to Run Locally

1. **Clone this repository**
   ```bash
   git clone https://github.com/Yashu2133/KanbanBoard
   cd KanbanBoard

   ```
2. **Install the Dependencies**
   - npm install

3. **Start the Development Server**
   - npm run dev

## 🔗 Live Demo 

 https://storecartapp.netlify.app/

 ---


 ## 💾 Note on Drag and Drop Support

To enable drag-and-drop functionality, install the appropriate version of react-beautiful-dnd based on your React version:

1. **For React 17 or 18 and below**
   - npm install react-beautiful-dnd uuid

   
2. **For React 19 and above (to avoid version conflicts)**
   - npm install react-beautiful-dnd@13.1.1 uuid --legacy-peer-deps


 ---




