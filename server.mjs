console.log("This is saasasasim");
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('Request IP :', req.ip);
    res.send('Hello Saaim!' + new Date().toString())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})