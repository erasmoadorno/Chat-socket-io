const express = require("express")
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)
const port = process.env.PORT || 4010
const ejs = require("ejs")

app.set("view engine", "ejs")
app.use(express.static('public'))

io.on("connection", (socket)=>{
    socket.on("msg", (data)=>{
        io.emit("chat", data)
       
    })
})

app.get("/", (req, res)=>{
    res.render("index.ejs")
    
})

http.listen(port, ()=>{ console.log("Server on")})

