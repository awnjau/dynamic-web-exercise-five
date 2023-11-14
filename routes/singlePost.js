const express = require("express");
const router = express.Router();

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get ("/",(req,res) => {
    res.send("Single Post");
});

router.get("/:postId", (req, res) => {
    const postId = req.params.postId; 
    console.log(postId);
    res.send("postId" + postId);
    const postQuery = firestore.getDoc(firestore.doc(db,"posts", postId));

    postQuery
    .then((response) => {
      res.send(response.data);  
    })
    .catch((error) => {
    console.log(error);
    res.send(error);
    });  
}); 

module.exports = router;

