const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, './dist/index.html'))
})

// Start the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.')
})
