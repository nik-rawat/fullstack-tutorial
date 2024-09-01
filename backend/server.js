import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.send("hello");
})

app.get("/api/friends", (req,res) => {
    res.json([{"id" : 1, "name" : "Nikhil"}, {"id" : 2, "name" : "Anmol"}, { "id" : 3 , "name" : "Chirag"}, { "id" : 4 , "name" : "Prakash"}, { "id" : 5 , "name" : "Karan"}]);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{  
    console.log(`Server started on port http://localhost:${port}`);
})