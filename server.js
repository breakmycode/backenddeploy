const express = require('express')
const path = require('path')


const SERVER_PORT = process.env.PORT ||3334
//IS PORT ENV VARIABLE IS SET  i will take its value , else i wil take  3334,
// also in app.Listen we will use SERVER_PORT
const app = express()



app.use('/public', express.static(path.join(__dirname, "public")))


app.get('/', (req,res) => res.send("hello from the backend"))


app.listen(SERVER_PORT, () => console.log("server started"))