const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const path = require('path')
const app = express()
const server = http.Server(app)
const io = socketio(server)

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})
app.get('/local', (req, res) => {
  res.sendFile(path.join(__dirname + '/local.html'))
})



server.listen(3000, () => {
  console.log('listening 3000')
})