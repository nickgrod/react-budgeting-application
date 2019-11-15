const express = require('express')
const path = require('path')
app = express()
const port = process.env.PORT || 3000

// app.use(express.static(path.join(__dirname, 'public')));
app.get('', (req, res) => {
    res.sendFile('./redux-101.js')
})


app.listen(port, () => {
    console.log('Server is up and running.')
})