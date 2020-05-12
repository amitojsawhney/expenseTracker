const express = require('express')
const app = express()

const myaccountRoute = require('./routes/myaccount')
app.use('/myaccount', myaccountRoute)


app.listen(3000);