import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyDgqeZFI5Dnjvne6DpaLwcuDYYQ5ybrVbw",
   authDomain: "fir-tutorial-35b04.firebaseapp.com",
   projectId: "fir-tutorial-35b04",
   storageBucket: "fir-tutorial-35b04.firebasestorage.app",
   messagingSenderId: "21548328591",
   appId: "1:21548328591:web:ae4e6dff7c57cc2e3472fa",
   databaseURL: "https://fir-tutorial-35b04-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
export default app;
