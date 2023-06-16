const express = require('express')
const app = express()

/* global process */
const PORT = process.env.PORT || 5000

app.use(express.static('dis'))

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
