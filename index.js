const express = require('express');
const app = express();
const firebase = require("firebase/app")

//port
const port = 4000;

const firebaseConfig = {
    apiKey: "AIzaSyC0__x3SaPgbhol3uwbxst2jP49pilEYpg",
    authDomain: "dynamic-web-exercise-fiv-6ad5c.firebaseapp.com",
    projectId: "dynamic-web-exercise-fiv-6ad5c",
    storageBucket: "dynamic-web-exercise-fiv-6ad5c.appspot.com",
    messagingSenderId: "630776729293",
    appId: "1:630776729293:web:cc144c5877b9c339fba384"
  };
  
  firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
//const singlePostRoute = require('./routes/singlePost');
//const createPostRoute = require('./routes/createPost');

app.use("/", indexRoute);

  
  app.listen(port, () => {
    console.log(`Exercise five on port ${port}`)
  })