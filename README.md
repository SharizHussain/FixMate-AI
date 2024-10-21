# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# FixMate-AI

Fixmate is a Gemini API-integrated chatbot designed to help developers by providing reference solutions and resolving syntax errors. The solutions are stored in MongoDB, making it easy for users to query and retrieve relevant error messages and fixes.
 # Features

Syntax and reference error solutions  
AI-powered chatbot functionality  
Data stored and fetched from MongoDB  

 # Technologies Used

Frontend: React.js (using Vite)  
Backend: Node.js, Express.js  
Database: MongoDB  
API Integration: Gemini API  


What you need:

create a .env file and add: 
1. VITE_APP_API_KEY: the-gemini-api-key-here
2. VITE_APP_PROJECT_ID: project-id
3. VITE_APP_ENVIRONMENT_ID: environment-id

Steps for Users:

1. npm install
2. npm run dev
