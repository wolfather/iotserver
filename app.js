const express   = require('express'),
app             = express(),
server          = require('http'),
bodyParser      = require('body-parser'),
fs              = require('fs'),
config          = {
    PORT: process.env.PORT || 3000
}

server.Server(app)
app.use(
    bodyParser.urlencoded({ extended: true }),
    express.static('view'),
    express.static('node_modules')
)

const listen    = app.listen(config.PORT, () => console.log(`running application on ${config.PORT} port`)),
io              = require('socket.io').listen(listen)


let chat = []


app.get('/', (req, res) => {
    console.log(req);
    const indexFile = fs.readFileSync('./views/index.html', {encoding: 'utf8'})
    res.sendFile(indexFile)
})

io.on('connection', socket => {
    socket.emit('enter', {msg: 'oi'})

    socket.on('sendmessage', data => {
        console.log(data)
        socket.emit('checkMessageReceived', {msgChecked: true})
    })
})
