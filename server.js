const express = require('express')
const path = require('path')

const app = express()



app.use('/public', express.static(path.join(__dirname, "public")))


app.get('/', (req,res) => res.send("hello from the backend"))


app.listen(3334, () => console.log("server started"))