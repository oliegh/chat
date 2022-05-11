const { default: axios } = require('axios')
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true
  }
})

const usersData = {
  users: [],
  addUserId: function (id) {
    this.users.push({
      id: id
    })
  },
  addUserName: function (id, name) {
    this.users.some(user => {
      if (user.id === id) {
        user.name = name
        return true
      }
    })
  },

  getUser: function (id) {
    let userData = {}
    this.users.some(user => {
      if (user.id === id) {
        userData = user
        return true
      }
    })
    return userData
  }
}

io.on('connection', (socket) => {
  console.log('a user connected');

  usersData.addUserId(socket.id)

  socket.emit('connect id', socket.id)

  socket.on('chat message', (msg) => {
    io.sockets.emit('new message',
      {
        userData: usersData.getUser(socket.id),
        text: msg
      }
    )
  })

  socket.on('no name', () => {
    axios.post('https://plarium.com/services/api/nicknames/new/create?group=2&gender=2')
      .then(res => {
        usersData.addUserName(socket.id, res.data[0])
        socket.emit('set name', res.data[0])
        socket.emit('new user', res.data[0])
        io.sockets.emit('connect new user',
          {
            userData: usersData.getUser(socket.id)
          }
        )
      })
  })

  socket.on('name user', (data) => {
    usersData.addUserName(socket.id, data)
    io.sockets.emit('connect new user',
      {
        userData: usersData.getUser(socket.id)
      }
    )
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')

    if (usersData.getUser(socket.id)) {
      io.sockets.emit('user disconnect',
        {
          userData: usersData.getUser(socket.id)
        }
      )
    }
  })
})

server.listen(4000, () => {
  console.log('listening on *:4000');
});