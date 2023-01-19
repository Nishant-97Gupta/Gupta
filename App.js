const express=require("express");
const app=express();
app.get("/",(req,resp)=>{

    resp.sendFile("./public/Ns.html",{root:__dirname});
});
app.listen(5000);