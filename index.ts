import express from "express"

const app=express()

app.get("/",(req,res)=>{
    res.send("Go to Hell")
})
app.listen(3000,()=>{
    console.log("Listening on port 3000");
})
