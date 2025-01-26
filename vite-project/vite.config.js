import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})


// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAqpksr5sLf1lIIMlYoSibBB6MBVQLLOK8",
//   authDomain: "student-34336.firebaseapp.com",
//   projectId: "student-34336",
//   storageBucket: "student-34336.firebasestorage.app",
//   messagingSenderId: "400850052517",
//   appId: "1:400850052517:web:8eeeb847648b66eeeab44c",
//   measurementId: "G-GXXWG3287Y",
// };