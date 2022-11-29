import express from 'express'
import moment from 'moment';
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log('Request IP :', req.ip);
    res.send(`<h1> Hello Saaim. It is ${moment(new Date().getTime()).format('h:mm a')}</h1>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})